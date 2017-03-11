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
  res.render('index.ejs');
});

app.post('/report', (req,res)=>{
  var mpassport = new Passport(req.body);
  mpassport.save().then((doc)=>{
    console.log(doc);
    res.send("saved");
  }).catch((e)=>{
    res.send("出现错误，请重试");
  });
});




app.listen(3000, ()=>{
  console.log('server is running');
})
