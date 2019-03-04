const express = require('express')
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const routes = express.Router()

routes.use((req, res, next) => {
  res.locals.flashSucces = req.flash('success')
  res.locals.flashError = req.flash('error')

  next()
})

routes.get('/', (req, res) => res.redirect('/signin'))

routes.get('/signin', guestMiddleware, SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.use('/app', authMiddleware)

routes.get('/app/dashboard', (req, res) => res.render('dashboard'))
routes.get('/app/logout', SessionController.destroy)

module.exports = routes
