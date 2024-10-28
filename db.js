const mongoose=require("mongoose");
require('dotenv').config();
// const mongoURL=('localhost:3001/');
//const mongoURL=process.env.MONGODB_URL;
 const mongoURL=process.env.MONGODB_URL_LOCAL;


mongoose.connect(mongoURL);

const db = mongoose.connection;

//Define event listener for database connection

db.on('connected',()=>{
 console.log("MongoDB Connected");
})


db.on('Disconnected',()=>{
  console.log("MongoDB Disconnected");
 })

 module.exports=db;