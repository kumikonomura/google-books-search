// Require Mongoose
const mongoose = require('mongoose')

const Book = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  image: String,
  link: String
})
// Compile model from schema
module.exports = mongoose.model('Book', Book)

// REFERENCES
// https://mongoosejs.com/docs/guide.html
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
