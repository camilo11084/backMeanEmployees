const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// variable de entorno
app.set('port', process.env.PORT || 4000);

app.use(cors());
//morgan es un middleware procesa peticiones a medida que llegan
app.use(morgan('dev'));
app.use(express.json());//entienda objectos del content-type
app.use(express.urlencoded({ extended: false }));//entienda datos de form HTML

app.use('/api/employees', require('./routes/employees.routes'));



module.exports = app;