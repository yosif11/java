const express = require('express');
const app = express();
app.use(express.static('public'));
const http = require('http');
app.get("/", (request, response) => {
response.sendStatus(200); 
});
setInterval(() => {
http.get(`https://.glitch.me`); 
}, 280000); 
var shell = require('shelljs'); 
shell.exec('java -jar JMusicBot-0.2.9.jar')
