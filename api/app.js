const express = require('express');
const path = require('path');

const app = express();

const pathToIndex = '../client/index.html'; 

path.resolve(__dirname, pathToIndex);

app.use('/*', (request, response) => {
    response.sendFile(pathToIndex);
});


module.exports = app;