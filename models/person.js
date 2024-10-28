const mongoose =require("mongoose");


const personSchema=mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number
  },
  work:{
    type: String,
    required: true,
    enum:['chef','waiter','client']
  },
  mobile:{
    type: Number,
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  address:{
    type: String
  },
  salary:{
    type: Number,
    required: true
  }

});

// Create Person Model

const person= mongoose.model('person', personSchema);
module.exports=person;