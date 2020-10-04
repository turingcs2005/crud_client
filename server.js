const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

const port = process.env.PORT || 3001;
app.use(express.static(__dirname + '/dist/client'));
const server = http.createServer(app);

server.listen(port, () => console.log('Claire\'s diary app is running!'));