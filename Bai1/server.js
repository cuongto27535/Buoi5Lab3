var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  if(req.url == '/page-c.html'){
    res.writeHead(301,{"Location":"http://"+req.headers['host'] + '/page-b.html'});
    return res.end();
  }else if(req.url == '/page-b.html'){
    readFileAndResponse(res,'page-b.html');
  }
 

}).listen(8085);

function readFileAndResponse(res, fileUrl) {
  fs.readFile(fileUrl, function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}