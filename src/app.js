const express = require('express');
const morgan = require('morgan');
const app = express();
// TODO: Al PARECER PODEMOS CREAR VISTAS Y LLAMAR A ALGO PERSONALIZADO
// app.set('view engine', 'ejs');

// Aqui exporto la variable app
module.exports = app;

// Utilizar morgan para escuchar los http, necesario en rutas
app.use(morgan('dev'));
app.use(require('./routes/index'));