const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const indexController = require('../controllers/index')


router.get('/', indexController.index)

router.get('/register', CustomersController.index)

router.post('/register/add', CustomersController.add)

router.get('/list', CustomersController.listUsers)

module.exports = router