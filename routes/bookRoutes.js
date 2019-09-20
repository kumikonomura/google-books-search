const { Books } = require("../models/Book.js");

module.exports = app => {
  // GET all saved books from db
  app.get("/books", (req, res) => {
    Books.find({}, (e, books) => {
      if (e) throw e;
      res.json(books);
    });
  });
  // POST a book to the db
  app.post("/books", (req, res) => {
    Book.create(req.body, e => {
      if (e) throw e;
      res.sendStatus(200);
    });
  });
  // DELETE a book from the db
  app.delete("/books/:id", (req, res) => {
    Book.findByIdAndDelete(req.params.id, e => {
      if (e) throw e;
      res.sendStatus(200);
    });
  });
};
