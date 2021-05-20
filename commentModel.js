const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  email: String,
  message: String,
})

const CommentModel = mongoose.model('CommentModel', commentSchema)

module.exports = {
  CommentModel
} 
