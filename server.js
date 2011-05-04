var connect = require('connect'),
  less = require('less');

connect(
  connect.logger(),
  
  connect.router(function(app){
    app.get('/user/:id', function(req, res, next){
      // populates req.params.id
      res.end('Hello ' + req.params.id);
    });
    app.put('/user/:id', function(req, res, next){
      // populates req.params.id
    });
  })
).listen(8080);

console.log('Server running at http://localhost:8080');
