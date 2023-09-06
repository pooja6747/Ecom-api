const {getProduct,postProduct} = require('../Controllers/productController')

const route = require('express').Router()

route.get('/',getProduct)

route.post('/', postProduct)

module.exports = route