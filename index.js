/*const http=require('http');
const site=http.createServer(function(req,res){
    console.log('Hello World');
    res.setHeader('Content-Type','text/html');
     res.write('I am a Web Server');
    res.end('<h1> Hello Class!!</h1>');
});
site.listen(3000);*/


var express=require('express');
var app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(function(req,res,next){
    console.log("I'm in the middle");
    console.log(req.body.username);
    console.log(req.body.username);
});

app.get('/',function(req,res){
    conslose.log(req.body);
    res.send('GET sent')
});
app.get('/',function(req,res){
    conslose.log(req.body);
    res.send('POST sent')
});
app.get('/',function(req,res){
    res.send('PUT sent')
});
app.get('/',function(req,res){
    res.send('DELETE sent')
});

app.listen(3000);