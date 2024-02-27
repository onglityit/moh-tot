const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });
const patientUrl = 'http://localhost:3007/patients';

app.get('/helloworld', (req, res) => {
    res.send('Hello World from NodeJS 01');
});

app.post('/central-vaccine', upload.single('csv'), async (req, res) => {
  const uploadedFile = req.file;
  const csvFilePath = uploadedFile.path;
  const jsonArray = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => {
      jsonArray.push(data);
    })
    .on('end', async () => {

      for (let i = 0; i < jsonArray.length; i++) {
        let patient1 = (jsonArray[i]);
        if(patient1?.patient_id){
            let existingPatientId = await checkPatientExist(patient1?.patient_id);
            if(existingPatientId && existingPatientId !== "-1"){
                //update
                await updatePatient(existingPatientId, patient1?.patient_id, patient1?.name, patient1?.vaccine_dose, patient1?.date);
            }else{
                //not exist - create
                await addPatient(patient1?.patient_id, patient1?.name, patient1?.vaccine_dose, patient1?.date);
            }
        }
      }
      res.send('File uploaded and converted successfully :: ' + JSON.stringify(jsonArray) );
    });
});

app.listen(port, () => {
    console.log(`NodeJS server listening at http://localhost:${port}`);
});

async function addPatient(patient_id, name, vaccine_dose, date){
    try{
        let data = JSON.stringify({
            "patient_id": patient_id,
            "name": name,
            "vaccine_dose": vaccine_dose,
            "date": date
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: patientUrl,
            headers: { 
                'Content-Type': 'application/json', 
            },
            data : data
        };
        const response = await axios.request(config);
    }catch(error){}
}

async function updatePatient(id, patient_id, name, vaccine_dose, date){
    try{
        let data = JSON.stringify({
            "patient_id": patient_id,
            "name": name,
            "vaccine_dose": vaccine_dose,
            "date": date
        });
        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: patientUrl + '/' + id,
            headers: { 
                'Content-Type': 'application/json', 
            },
            data : data
        };
        const response = await axios.request(config);
    }catch(error){}
}

async function checkPatientExist(patient_id){
    try {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: patientUrl + '?patient_id=' + patient_id,
        };
        const response = await axios.request(config);
        return response.data?.length ? response.data[0].id : '-1';
    } catch (error) {
        return '-1';
    }
}