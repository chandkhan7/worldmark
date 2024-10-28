const passport=require('passport');
const localStrategy= require('passport-local').Strategy;
const Person = require("./models/person");



passport.use(new localStrategy(async(USERNAME,password,done)=>{
  //authentication logic
  try{
  
      const user =await Person.findOne({username});
      if(!user)
        return done(null,false,{message: 'Incorrect password'});

      const isPasswordMatch = await user.comparePassword(password)
      if(isPasswordMatch){
        return done(null,user);
      } else{
        return done (null ,false, {message: 'Incorrect password'});
      }
  }
  catch(err){
      return done(err);
  }
}));

module.exports =passport;