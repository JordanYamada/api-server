'use strict';

let validator = (request, response, next) => {
  if (request.query.name) {
    next();
  } else {
    // expresses way of throwing an error.
    next('No name on request');
  }
};

module.exports = validator;