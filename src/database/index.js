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
