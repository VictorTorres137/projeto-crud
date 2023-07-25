<<<<<<< HEAD
const mongoose = require('mongoose')



function conect(){
// mongoose.set('useNewUrlParser', true)
    
    mongoose.connect('mongodb://127.0.0.1:27017/projeto-crud')
    
    const db = mongoose.connection
    
    db.once('open', () =>{
        console.log('Conected to database')
    })
    
    db.on('error', console.error.bind(console,'conection error:'))

    }

    module.exports = {
        conect
    }
=======

const mongoose = require('mongoose')

function connect(){

  mongoose.connect('mongodb://127.0.0.1:27017/projeto-crud')
  
  const db = mongoose.connection
  
  db.once('open', () => {
    console.log('Connected to database!')
  })
  
  db.on('error', console.error.bind(console, 'conection error:'))
}

module.exports = {
  connect,
}
>>>>>>> 87d32b75ee1967eea2b2c942c4b5b5c22c869134
