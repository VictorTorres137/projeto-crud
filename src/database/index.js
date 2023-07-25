const mongoose = require('mongoose')



const db = mongoose.connection

function conect(){
// mongoose.set('useNewUrlParser', true)
    
    mongoose.connect('mongodb://127.0.0.1:27017/projeto-crud')
    
    
    db.once('open', () => {
        console.log('Conected to database')
    })
    
    db.on('error', console.error.bind(console,'conection error:'))

    }

    module.exports = {
        conect
    }
