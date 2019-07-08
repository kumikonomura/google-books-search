module.exports = (Schema, model) => {
  const Book = new Schema({
    title: String,
    author: String,
    description: String,
    image: String,
    link: String
  })
  return model('Book', Book)
}
