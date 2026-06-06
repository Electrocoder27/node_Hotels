require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db')
const passport = require('./auth') ;
const bodyParser= require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000 ;


//middleware function.............
const logrequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next() ;//move to next phase.........
}
app.use(logrequest) ;


app.use(passport.initialize()) ;
const localAuthMiddleware = passport.authenticate('local',{session:false}) ;

app.get('/', (req, res) => {
  res.send('welcome to my restaurant')
})


//importing router file heren for menu!!
const menuroutes = require('./routes/menuroutes') ;
app.use('/menu',localAuthMiddleware,menuroutes) ;

//importing router file heren for person!!
const personroutes = require('./routes/personroutes') ;
app.use('/person', personroutes) ;



app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})