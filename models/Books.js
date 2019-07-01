// Require Mongoose
const mongoose = require('mongoose')
// Define a schema
const Schema = mongoose.Schema

const BookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  image: String,
  link: String
})
// Compile model from schema
const Book = mongoose.model('Book', BookSchema)
module.exports = Book

// REFERENCES
// https://mongoosejs.com/docs/guide.html
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
