const mongoose = require('mongoose')

var mongoDB = 'mongodb://127.0.0.1:27017/try-db';
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log("Connection Successfully  !!!!"))
.catch( () => console.log(err));

// var db = mongoose.connection;
// db.on('error',console.error.bind(console, "MongoDB connection error :"))
