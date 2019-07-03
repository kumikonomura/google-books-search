const { Book } = require('../models/Book.js')
const axios = require('axios')

// Define API routes here
module.exports = app => {
  // Search for book with Google Books API
  app.get('/search', (req, res) => {
    let searchTerm = req.body.title
    axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAGDbzsUMeCa0dq4ANvOuWeZACpiZkSbpY`
    )
      .then(data => {
        res.json(data)
      })
      .catch(e => console.log(e))
  })
  app.get('/api/books', (req, res) => {
    // Should return all saved books as JSON
    Book.find({}, (e, books) => {
      if (e) throw e
      res.json(books)
    })
    app.post('/api/books', (req, res) => {
      // Will be used to save a new book to the database
      Book.create(req.body, e => {
        if (e) throw e
        res.sendStatus(200)
      })
      app.delete('/api/books/:_id', (req, res) => {
        // Will be used to delete a book from the database by Mongo _id
        Book.remove({ _id: req.params.id }, e => {
          if (e) throw e
          res.sendStatus(200)
        })
      })
    })
  })
}
