var Hapi = require('hapi');
var path = require('path');

var abs = path.dirname(process.mainModule.filename);
console.log(abs);
var server = new Hapi.Server(3131);

server.route({
    path: '/{path*}',
    method: 'GET',
    handler: {
        directory: {
            path: abs + '/Routes/'
        }
    }
});

server.start(function(){
    console.log('Server running');
});