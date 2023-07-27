const express = require('express')
const path = require('path')

const routes = require('./routes')
const db = require('./database')
const internal = require('stream')

const app = express()

//conecção com banco de dados
db.connect()

//definindo template engine
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (Formulário)
app.use(express.urlencoded({ extended: true}))


//definindo rotas
app.use('/', routes)

// Erro Pagina Não encontrada 404
app.use((req, res) => {
    res.send('Pagina não encontrada!')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Funfando!! porta:${port}`))
