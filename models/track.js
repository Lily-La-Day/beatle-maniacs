const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, min: 1, max: 5, required: true }

}, {
  timestamps: true
})

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },

  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
})

const trackSchema = new mongoose.Schema({

  title: {type: String, required: true, unique: true},
  year: { type: Number, required: true},
  single: {type: Boolean, required: true},
  bSide: {type: Boolean},
  aSide: {type: Boolean},
  releasedWith: {type: String},
  chartPosition: {type: Number},
  album: {type: String},
  writtenBy: {type: String},
  trivia: {type: String},
  length: {type: Number},
  audio: { type: String },
  ratingsTotal: {type: Number, default: 0, required: true},
  comments: [ commentSchema ],
  rating: [ ratingSchema ],

  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }

}, {
  timestamps: true
})

trackSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Track', trackSchema)
