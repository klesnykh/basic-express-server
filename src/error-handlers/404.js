'use strict';

function error404(request, response, next) {
  response.status(404).send('404/Not-Found');
}

module.exports = error404;