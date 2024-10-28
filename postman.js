const express =require("express");
const app=express();
const db =require("./db");
const Person = require("./models/person");
const bodyParser=require("body-parser");
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
require('dotenv').config();


app.use(bodyParser.json());
const PORT =process.env.PORT || 3002;


app.get('/about',(req,res)=>{
  res.send('Welcom sir');
})



app.use('/', personRoutes);
app.use('/menu', menuItemRoutes);

// app.get("/about",(req,res)=>{
//   res.send('You are on About')
// });







app.listen(PORT, ()=> console.log("Server Begins"));