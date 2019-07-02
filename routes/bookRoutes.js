const { Book } = require('../models')
const axios = require('axios')
const { join } = require('path')

// Define API routes here
module.exports = app => {
  // Search for book with Google Books API
  app.get('/search', (req, res) => {
    let searchTerm = req.body.title
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAGDbzsUMeCa0dq4ANvOuWeZACpiZkSbpY`)
      .then(data => {
        res.json(data)
      })
      .catch(e => console.log(e))
  })
  app.get('/api/books', (req, res) => {
    // Should return all saved books as JSON
    Book.find({})
      .then(books => res.json(books))
      .catch(e => console.log(e))
  })
  app.post('/api/books', (req, res) => {
    // Will be used to save a new book to the database
    Book.create(req.body)
      .then(books => res.json(books))
      .catch(e => console.log(e))
  })
  app.delete('/api/books/:id', (req, res) => {
    // Will be used to delete a book from the database by Mongo _id
    Book.findByIdAndDelete(req.params.id)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
