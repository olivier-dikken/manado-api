// require deployd
var deployd = require('deployd');

// configure database etc. 
var server = deployd({
  port: process.env.PORT || 5000,
  env: 'development',
  db: {
    host: 'ds023315.mlab.com',
    port: 23315,
    name: 'heroku_c8psdp03',
    credentials: {
      username: 'admin',
      password: 'password'
    }
  }
});

// heroku requires these settings for sockets to work
//server.sockets.manager.settings.transports = ["xhr-polling"];
server.sockets.server.set( 'transports', ["xhr-polling"]);

// start the server
server.listen();

// debug
server.on('listening', function() {
  console.log("Server is listening on port: " + process.env.PORT);
});

// Deployd requires this
server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});