module.exports = (Schema, model) => {
  const Book = new Schema({
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String
  });
  return model("Book", Book);
};
