var http = require('http');
var fs = require('fs');

fs.writeFile('test.txt','Tô Lê Cương PH27535 0378642488 Lập trình mobile' ,function(err){
   if(err)
   console.log(err);
   else
   console.log('Viết file thành công');
});
http.createServer(function(req, res) {
  fs.readFile('demofile.html',function(err, data){
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write(data);
     return res.end();
  });

}).listen(8080);