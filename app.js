const express = require('express')
var app = express();
const path = require("path");
const bodyParser= require('body-parser')
const multer = require('multer');
app.use(urlencoded({extended: true}))



// app.get('/',function(req,res){
//     res.send("Hello World");
// })

// app.post('/hello',function(req,res){
//     res.send("I am from hello");
// })

// var things = require('./things.js');

//both index.js and things.js should be in same directory
// app.use('/this', things);

// app.listen(3000)

// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/my-db')
//app.set('view engine', 'pug')


// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })

  
app.use('/', function(req, res){
    // console.log('Res' , res);
    // console.log('req' , req);
    // console.log('DIR NAME',__dirname);
    // console.log('DIR NAME',__dirname,'/index.html');

    res.sendFile(path.join(__dirname, "index.html"));

});


app.listen(3000)

