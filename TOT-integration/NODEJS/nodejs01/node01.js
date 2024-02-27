const express = require('express');
const app = express();
const port = 3001;
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
app.get('/helloworld', (req, res) => {
    res.send('Hello World from NodeJS 01');
});
app.post('/central-vaccine', upload.single('csv'), (req, res) => {
  const uploadedFile = req.file;
  res.send('File uploaded successfully');
});

app.listen(port, () => {
    console.log(`NodeJS server listening at http://localhost:${port}`);
});
