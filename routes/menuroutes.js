const express = require('express') ;
const router = express.Router() ;
const menu =  require('./../models/menu') ;

router.post('/',async(req,res) => {
  try{
    const data = req.body ;
    const newmenu = new menu(data) ;
    const response = await newmenu.save() ;
    console.log('menu saved') ;
    res.status(200).json(response) ;
  }
  catch(err){
    console.log(err) ;
    res.status(500).json({error:'Invalid data'}) ;
  }
})

router.get('/',async(req,res) => {
  try{
    const data = await menu.find() ;
    console.log('menu fetched') ;
    res.status(200).json(data) ;
  }
  catch(err){
    console.log(err) ;
    res.status(500).json({error : 'Internal server error'}) ;
  }
})

router.get('/:taste',async(req,res) =>{
   try{
    const taste = req.params.taste ;

    if(taste == 'sweet' || taste == 'spicy' || taste == 'salty'){
      const response = await menu.find({taste: taste}) ;
      console.log('data fetched') ;
      res.status(200).json(response) ; 
    }
    else{
      res.status(400).json({error: 'Invalid taste'}) ;
    }
  }
  catch(err){
    console.log(err) ;
    res.status(500).json({error: 'Internal server error'}) ;
  }
})

//comment added for testing purpose.....
module.exports = router ;