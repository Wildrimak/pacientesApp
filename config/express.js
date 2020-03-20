var express = require('express');
var app = express();
var routes = require('../config/routes');

app.use(express.static('./public'));

routes(app);

module.exports = app;
