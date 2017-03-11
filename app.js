const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var Schema = mongoose.Schema;
var app = express();
app.set('view engine', 'ejs');
app.disable('x-powered-by');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/passport');
mongoose.Promise = global.Promise;

var passportSchema = new Schema ({
  surname: String,
  name: String,
  gender: String,
  bplace: String,
  dob: Date,
  passnum: String
});


var Passport = mongoose.model('Passport', passportSchema);

app.get('/', (req,res)=>{
  res.send('hello');
});




app.listen(3000, ()=>{
  console.log('server is running');
})
