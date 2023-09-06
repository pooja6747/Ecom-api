const {getCategory,postCategory} = require('../Controllers/categoryController')

const route = require('express').Router()

route.get('/',getCategory)

route.post('/', postCategory)

module.exports = route