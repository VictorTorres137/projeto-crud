const mongoose = require('mongoose')

const db = mongoose.connection

function conect(){
    
    mongoose.connect('mongodb://127.0.0.1:27017/projeto-crud')
    
    db.once('open', () => {
        console.log('Connected to database')
    })
    
    db.on('error', console.error.bind(console,'conection error:'))

    }

module.exports = {
    conect
}
