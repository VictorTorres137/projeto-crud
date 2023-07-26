const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de clientes'

function index (req, res) {
    res.render('register',{
        title: defaultTitle
    })
}

async function add(req, res){
   
    const{
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })
    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro reslizado com sucesso!!'
    })
}

async function list(req, res) {

    const users = await CustomersModel.find()

    res.render('list', {
        title:'Lista Usuários',
        users,
    })
}

async function formEdit(req, res) {

    // console.log(req.query.id)

    const id = req.query.id

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário',
        user,
    })
}

async function edit(req, res) {
    const{
        name,
        age,
        email,
    } = req.body

    const id = req.params.id

    // console.log(id)

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar Usuário',
        user,
        message:`Usuário "${name}" editado com sucesso!!`
    })

}

async function remove(req, res) {
    // console.log(req.params)

    const id = req.params.id

    const remove = await CustomersModel.deleteOne({ _id: id })

    console.log(remove)

    if (remove.deletedCount === 1) {
        res.redirect('/list')
    }
}

module.exports = {
    add,
    index,
    list,
    formEdit,
    edit,
    remove,
}