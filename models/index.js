const { Schema, model } = require('mongoose')
const Book = require('./Book')

const db = {
  Book: Book(Schema, model)
}

module.exports = db
