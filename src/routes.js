const express = require('express')
// const UserController = require('./app/controllers/UserController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('hello world')
})

// routes.get('/', (req, res) => res.render('auth/signup'))
// routes.get('/signup', UserController.create)
// routes.post('/signup', UserController.store)

module.exports = routes
