require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db')


const bodyParser= require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000 ;


app.get('/', (req, res) => {
  res.send('welcome to my restaurant')
})


//importing router file heren for menu!!
const menuroutes = require('./routes/menuroutes') ;
app.use('/menu',menuroutes) ;

//importing router file heren for person!!
const personroutes = require('./routes/personroutes') ;
app.use('/person', personroutes) ;



app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})