const mockServer = require('./middleware');
var express = require('express');
var app = express();
mockServer(app, './mock');
app.listen(5000);
console.log('[mockfileserver] is starting at port 5000')
