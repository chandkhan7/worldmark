const express =require('express');
const router=express.Router();
const Person=require('../models/person');

router.post("/",async(req,res)=>{
  try{const data=req.body; //Assuming the request body contains the person data 
  
    //Create a new person document using the mongoose model
    const newPerson=new Person(data); 

    //save the New Person to the Database
    const response= await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal Server error'})

  }
});

router.get("/",async(req,res)=>{
  try{
   const data= await Person.find();
   console.log('data fetched');
   res.status(200).json(data);
  }
  catch(err){
   console.log(err);
   res.status(500).json({err: 'internal Server error'})
  }
})



router.get("/:workType", async(req,res)=>{
  try{
      const workType =req.params.workType;

      if(workType=='chef'|| workType=='waiter'|| workType=='client'){
        const response = await Person.find({work: workType});
        console.log('data fetched'); 
        {res.status(200).json(response)};
      }else
      {res.status(404).json({error: 'Invalid work Type'});
      }
  }
  catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'})
  }
})


router.put('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const updatepersonData=req.body;
    const response = await Person.findByIdAndUpdate(personId,updatepersonData,{
    new: true, //Return the Update Document
    runValidators: true, // Run mongoose Validation
    })

    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }
     console.log('data Updated');
     res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  }
})


router.delete('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const updatepersonData=req.body;
    const response = await Person.findByIdAndDelete(personId,updatepersonData,{
    new: true, //Return the Update Document
    runValidators: true, // Run mongoose Validation
    })

    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }
     console.log('data deleted');
     res.status(200).json({message:'person deleted Successfully'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  }
})

























module.exports=router;