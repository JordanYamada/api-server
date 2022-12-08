function notFound(error, request, response, next) {
  console.log(error);
  response.status(404);
  response.send('Not Found');
}

module.exports = notFound;