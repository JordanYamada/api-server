'use strict';

const express = require('express');
const app = express();
const coffeeRouter = require('./routes/coffee.js');
const logger = require('./middleware/logger.js');
// const validator = require('./middleware/validator.js');

const notFound = require('./error-handlers/404.js');

app.use(logger);
app.use(express.json());
app.use(coffeeRouter);

app.get('/', (request, response) => {
  try {
    response.status(200).send('Proof of life');
  } catch(e) {
    console.log(e);
  }
});

app.get('*', notFound);




module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('We hear you on port ' + port);
    });
  },
  app,
};