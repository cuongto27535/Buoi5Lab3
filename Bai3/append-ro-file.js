var fs = require('fs');

var data ="\nLearn Node.js"

fs.appendFile('sample.txt',data,'utf8',
   function(err){
    if(err) throw err;
    console.log("Data is appended to file successfully")
   });
