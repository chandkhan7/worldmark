const mongoose=require("mongoose");


const mongoURL=("mongodb://127.0.0.1:27017/domroom");


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