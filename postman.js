const express =require("express");
const app=express();
const db =require("./db");
const Person = require("./models/person");
const bodyParser=require("body-parser");
const personRotes=require('./routes/personRoutes');
const { config } = require("dotenv");
require('dotenv').config();


app.use(bodyParser.json());


const PORT =process.env.PORT ||3002;


app.use('/',personRotes);


// app.get("/about",(req,res)=>{
//   res.send('You are on About')
// });







app.listen(PORT, ()=> console.log("Server Begins"));