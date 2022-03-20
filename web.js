//web hello world that echos url parameters
const http = require('http');
var url = require('url');


var util = require('util') ; 
 var args = process.argv.slice(2);
var xx = util.format(" %s %s  ",  "a" , "B" );
  console.log(xx);

exports.doit = function(req, res)
{

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('<h1> Hello World! </h1> \n');
  
 res.write(args[0]);

  var q = url.parse(req.url, true).query;
  var txt = q.who + " " + q.loves;
 res.write(txt);
res.end("</body> </html>");
}).listen(8081);
}
