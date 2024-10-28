const express =require("express");
const app=express();
const PORT=3001;
const db =require("./db");
const Person = require("./models/person");
const bodyParser=require("body-parser");
const personRotes=require('./routes/personRoutes')


app.use(bodyParser.json());





app.use('/',personRotes);



// app.get("/about",(req,res)=>{
//   res.send('You are on About')
// });







app.listen(PORT, ()=> console.log("Server Begins"));