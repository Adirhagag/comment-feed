const { CommentModel } = require('./commentModel.js')
const crypto = require('crypto');

async function getComments(req, res) {
  const { email } = req.query
  try {
    const comments = await CommentModel.find({ "email": new RegExp(email, 'i') })
    res.status(200).json(comments)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

async function addComment(req, res) {
  const comment = req.body

  const newComment = new CommentModel(comment)
  try {
    await newComment.save()
    res.send(201).json(newComment)
  } catch (err) {
    res.send(409).json({ message: err.message })
  }
}

function getGravatarUrl(req, res) {
  const { email } = req.params
  const md5 = crypto.createHash('md5').update(email).digest('hex')
  const url = `https://www.gravatar.com/avatar/${md5}.jpg?d=mp`
  res.send(url)
}

module.exports = {
  getComments,
  addComment,
  getGravatarUrl
}