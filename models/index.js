const { Schema, model } = require('mongoose')

const db = {
  Book: require('./Book.js')(Schema, model)
}

module.exports = db
