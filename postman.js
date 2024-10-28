const express =require("express");
const app=express();
const db =require("./db");
const bodyParser=require("body-parser");
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const passport=require('./auth.js')
const PORT =process.env.PORT || 3002;
const bcrypt =require('bcrypt');

require('dotenv').config();


app.use(bodyParser.json());
app.use(passport.initialize());


//MiddleWare 
const logRequest=(req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`);
  next();
}

app.use(logRequest);




const localAuthMiddleware = passport.authenticate('local', {session: false});


app.get('/about', localAuthMiddleware ,function (req, res) {
  res.send('Welcome to our Hotel');
})



app.use('/person',localAuthMiddleware, personRoutes);
app.use('/menu', menuItemRoutes);

// app.get("/about",(req,res)=>{
//   res.send('You are on About')
// });







app.listen(PORT, ()=> console.log("Server Begins"));