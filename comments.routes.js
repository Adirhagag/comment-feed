const express = require('express')
const { getComments, addComment, getGravatarUrl } = require('./comments.controller.js')
const router = express.Router()

//localhost:5000/comments
router.get('/', getComments)
router.post('/', addComment)
router.get('/:email', getGravatarUrl)

module.exports = router