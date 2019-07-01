const Track = require('../models/track')
const User = require('../models/user')


function indexRoute(req, res, next) {
  req.body.user = req.currentUser
  Track
    .find(req.query)
    .populate('user')
    .then(tracks => res.status(200).json(tracks))
    .catch(next)
}


function createRoute(req, res, next) {
  req.body.user = req.currentUser
  console.log(req.body.user)
  Track
    .create(req.body)
    .then(track => res.status(201).json(track))
    .catch(next)
}

function getUser(req, res, next) {
  req.body.user = req.currentUser
  console.log(req.body.user._id)
  User
    .findById(req.body.user._id)
    .then(user => res.status(201).json(user.stars))
    .catch(next)
}

function showRoute(req, res, next) {
  Track
    .findById(req.params.id)
    .populate('user')
    .populate('comments.user')
    .then(track => {
      if(!track) throw new Error('Not Found')
      return res.status(200).json(track)
    })
    .catch(next)
}

function editRoute(req, res, next) {
  Track
    .findById(req.params.id)
    .then(track => {
      if(!track) throw new Error('Not Found')
      return track.save()
    })
    .then(track => res.status(202).json(track))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Track

    .findByIdAndRemove(req.params.id)
    .then(track => {
      if(!track) throw new Error('Not Found')
    })
    .then(() => res.sendStatus(204))
    .catch(next)
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  console.log(req.currentUser)
  Track
    .findById(req.params.id)
    .then(track => {
      console.log('making comment', track)
      if(!track) throw new Error('Not Found')
      track.comments.push(req.body)
      return track.save()

    })
    .then(track => res.status(201).json(track))
    .catch(next)
}
function commentDeleteRoute(req, res, next) {
  Track
    .findById(req.params.id)
    .populate('user')
    .then(track => {
      console.log('deleting', track)
      if (!track) throw new Error('Not Found')
      const comment = track.comments.id(req.params.commentId)
      comment.remove()
      return track.save()
    })
    .then(track => res.status(200).json(track))
    .catch(next)
}



function ratingCreateRoute(req, res, next) {
  console.log('rating', req.body.rating)
  req.body.user = req.currentUser
  console.log(req.currentUser)
  Track
    .findById(req.params.id)
    .populate('user')

    .then(track => {
      const rating = req.body.rating
      if (req.currentUser.stars - rating >= 0) {
        console.log((req.currentUser.stars - rating > 0))
        req.currentUser.stars = req.currentUser.stars - rating
      } else if (req.currentUser.stars - rating < 0) throw new Error('Not Found')
      if(!track) throw new Error('Not Found')
      track.rating.push(req.body)
      track.ratingsTotal = track.ratingsTotal + rating
      req.currentUser.save()
      console.log(req.currentUser, track)
      return track.save()

    })


    .then(track => res.status(201).json(track))
    .catch(next)
}







module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  delete: deleteRoute,
  comment: commentCreateRoute,
  deleteComment: commentDeleteRoute,
  rating: ratingCreateRoute,
  getUser: getUser


}
