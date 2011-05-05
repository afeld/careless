var connect = require('connect'),
  fs = require('fs'),
  md = require("node-markdown").Markdown,
  less = require('less');

connect(
  connect.logger(),
  
  connect.router(function(app){
    app.get('/', function(req, res, next){
      // output the formatted README
      fs.readFile('README.md', function(err, data){
        res.end(md(data.toString()));
      });
    });
    
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
