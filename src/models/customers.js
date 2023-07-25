<<<<<<< HEAD
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
=======
const mongoose = require ('mongoose')

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email:String,
  password:String,

>>>>>>> 87d32b75ee1967eea2b2c942c4b5b5c22c869134
})

const Model = mongoose.model('customers', schema)

<<<<<<< HEAD
module.exports = Model
=======
module.exports = Model
>>>>>>> 87d32b75ee1967eea2b2c942c4b5b5c22c869134
