const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')



function register(req, res, next) {
  console.log(req, res)
  User
    .create(req.body, console.log(req.body))
    .then(user => res.status(201).json({
      message: `Congratulations ${user.username}, you have been accepted into this very exclusive club! Well Done You!`
    }))
    .catch(next)
}

function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      console.log(req.body)
      if(!user || !user.validatePassword(req.body.password)) {
        throw new Error('Unauthorized')
      }
      const token = jwt.sign({ sub: user._id}, secret, { expiresIn: '72h' })
      res.status(200).json({ message: `Why hello there ${user.username}, it's nice to see you again!`,
        token
      })
    })
    .catch(next)
}

function showUsers(req, res, next) {

  User
    .find(req.query)
    .then(users => res.status(200).json(users))
    .catch(next)
}
//This is the function that should wouldn't work server side.

function showstars(req, res, next) {
  
  console.log('stars', req.params)
  User
    .findById(req.params.userId)
    .populate('user')

    .then(users => res.status(200).json(users.stars))
    .catch(next)
}


module.exports = {
  register,
  login,
  showUsers,
  showstars


}
