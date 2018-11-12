const express = require('express');
var app = express();

var bodyParser = require('body-parser');
var viewEngine = require('view-engine');

var path    = require("path");
//app.set('viewEngine', 'html');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  var readDirFiles = require('read-dir-files');

  // readDirFiles.list('images', function (err, filenames) {
  //   if (err) return console.dir(err);
  //   	console.log(filenames);
  // });


app.get('/',function(req,res){
	
    res.sendFile(path.join(__dirname+'/index.html'));
  });
	


app.get('/image',function(req,res){
	//console.log("hjkhjkfhjkdshfjkhsdjkfhdjk",req.params)
	var query = require('url').parse(req.url,true).query;
	console.log("path",query.path)
	//res.writeHead(200, {"Content-Type": "text/html"});

// 	readDirFiles.list(query.path, function (err, filenames) {
//     if (err) return console.dir(err);
//     var htmlContent= ''
//     for(var i of filenames){
//     	htmlContent=htmlContent+'<img src="./'+i+'">'
//     }
//     console.log(filenames);
//     res.send(htmlContent)

// })
res.send("<img src='http://localhost:8000/imageReader/images/one.jpeg'>")
})
  app.listen(8000,function(){
  	console.log("server started");
  })




