function notFound(error, request, response, next) {
  console.log(error);
  response.status(40);
  response.send('Not Found');
}

module.exports = notFound;