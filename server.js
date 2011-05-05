var connect = require('connect'),
  less = require('less');

connect(
  connect.logger(),
  
  connect.router(function(app){
    app.post('/render', function(req, res, next){
      req.content = '';
      
      // handle multipart POSTs
      req.addListener('data', function(chunk) {
        req.content += chunk;
      });
      
      req.addListener('end', function() {
        
        // all POST data has been received - render the LESS!
        less.render(req.content, function (e, css) {
          res.end(css);
        });
      });
    });
  })
).listen(8080);

console.log('Server running at http://localhost:8080');
