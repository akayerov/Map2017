const StaticServer = require('static-server');
const server = new StaticServer({
  rootPath: 'public',            // required, the root of the server file tree
  port: 8090,               // optional, defaults to a random port
  host: '0.0.0.0',       // optional, defaults to any interface
  cors: '*'                 // optional, defaults to undefined
});

server.start(() => {
  console.log('Server listening to', server.port);
});
