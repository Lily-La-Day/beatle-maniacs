const router = require('express').Router()
const tracks = require('../controllers/tracks')
const users = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')


router.route('/tracks')
  .get(tracks.index)
  .post(secureRoute, tracks.create)

router.route('/users')
  .get(users.showUsers)

router.route('/users/:userId')
  .get(secureRoute, users.showStars)



router.route('/showstars')
  .post(secureRoute, tracks.getUser)




router.route('/tracks/:id')
  .get(tracks.show)
  .put(secureRoute, tracks.edit)
  .delete(secureRoute, tracks.delete)

router.route('/tracks/:id/comments')
  .post(secureRoute, tracks.comment)

router.route('/tracks/:id/ratings')
  .post(secureRoute, tracks.rating)

router.route('/tracks/:id/comments/:commentId')
  .delete(secureRoute, tracks.deleteComment)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Oh dear, not found.' }))


module.exports = router
