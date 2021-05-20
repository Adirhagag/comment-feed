const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

const commentsRoutes = require('./api/comments/comments.routes.js')

const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())

app.use('/comments', commentsRoutes)

app.get('/', (req, res) => {
  res.send('Check for the server')
})

// const CONNECTION_URL = 'mongodb+srv://adir-hagag:tXmQm8P3YRTNdFvA@comments.mcna9.mongodb.net/feed_db?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log('Server is running on port: ' + PORT)))
  .catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)