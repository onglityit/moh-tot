const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/helloworld', (req, res) => {
    res.send('Hello World from NodeJS 01');
});

app.get('/hellojava', (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8082/day1-java02/helloworld',
        headers: { }
    };
    axios.request(config)
    .then((response) => {
     res.send(response.data);
    })
    .catch((error) => {
    console.log(error);
    });
})

app.listen(port, () => {
    console.log(`NodeJS server listening at http://localhost:${port}`);
});
