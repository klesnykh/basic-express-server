'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');

app.use(cors());

// this becomes middleware when we add these params
// application level (this runs no matter what route is being used in the request)
app.use(logger);

app.get('/person', validator, (request, response, next) => {
  response.status(200).json({name: request.query.name});
});

// error handler -> magic number of parameters!!
app.use('*', error404);
app.use(error500);

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log('Server is listening');
  }),
};