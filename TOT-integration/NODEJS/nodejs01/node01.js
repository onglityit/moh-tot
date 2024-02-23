const express = require('express');
const app = express();
const port = 3001;

app.get('/helloworld', (req, res) => {
    res.send('Hello World from NodeJS 01');
});

app.listen(port, () => {
    console.log(`NodeJS server listening at http://localhost:${port}`);
});
