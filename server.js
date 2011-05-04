var webservice = require('webservice'),
  less = require('less');

webservice.createServer(less).listen(8080);

console.log(' > stand-alone json webservice started on port 8080');
