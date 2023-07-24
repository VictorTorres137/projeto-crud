const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

db.connect()



// const register = new Model({
//     name: "vi",
//     age: 32,
//     email: 'vi@gmail.com',
//     password: "1234567",
// })

// register.save()

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true}))

app.use('/', routes)

app.use((req, res) => {
    res.send('Pagina não encontrada!')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Funfando!! porta:${port}`))
