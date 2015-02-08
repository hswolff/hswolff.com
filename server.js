'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  port: 9000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
