const express = require('express');
const morgan = require('morgan');
const app = express();

// Aqui exporto la variable app
module.exports = app;

// Utilizar morgan para escuchar los http, necesario en rutas
app.use(morgan('dev'));
app.use(require('./routes/index'));