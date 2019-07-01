const express = require('express')
// const { join } = require('path')
const PORT = process.env.PORT || 3001
const app = express()

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

require('mongoose').connect('mongodb://localhost/googlebooks_db', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true
})
  .then(_ => app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
  }))
  .catch(e => console.log(e))
