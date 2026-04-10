const express = require('express') ;
const router = express.Router() ;
const person = require('../models/person') ;


router.post('/', async (req,res) => {
  try{
    const data = req.body //assuming the  req body contains the person data......

    const newPerson = new person(data);
    const response = await newPerson.save() ;
    console.log('data saved');
    res.status(200).json(response) ;
  }
  catch(err){
    console.log(err) ;
    res.status(500).json({ error: 'Invalid data' }) ;
  }
});
  
router.get('/',async(req,res) => {
  try{
    const data = await person.find() ;
    console.log('data fetched') ;
    res.status(200).json(data) ;
  }
  catch(err){
    console.log(err) ;
    res.status(500).json({error: 'Internal Server Error'}) ;
  }
})

router.get('/:workType',async(req,res) =>{
   try{
    const workType = req.params.workType ;

    if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
      const response = await person.find({work: workType}) ;
      console.log('data fetched') ;
      res.status(200).json(response) ; 
    }
    else{
      res.status(400).json({error: 'Invalid work type'}) ;
    }
  }
  catch(err){
    console.log(err) ;
    res.status(500).json({error: 'Internal server error'}) ;
  }
})

router.put('/:id',async(req,res) =>{
  try{
    const perid = req.params.id ;
    const updateddata = req.body ;

    const response = await person.findByIdAndUpdate(perid, updateddata, {
      new : true ,
      runValidators:true ,
    }) 

    if(!response){
      return res.status(404).json({error: 'Person not found'}) ;
    }

    console.log('data updated') ;
    res.status(200).json(response) ;
  }
  catch(err){
    console.log(err) ;
    res.status(500).json({error: 'Internal server error'}) ; 
  }
})

router.delete('/:id', async(req,res) => {
  try{
    const perid = req.params.id ;
    const response = await person.findByIdAndDelete(perid) ;
    if(!response){
      return res.status(404).json({error: 'Person not found'}) ;
    }
    console.log('data deleted') ;
    res.status(200).json({message: 'Person deleted successfully'}) ;

  }
  catch(err){
    console.log(err) ;
    res.status(500).json({error: 'Internal server error'}) ;
  }
})


module.exports = router ;