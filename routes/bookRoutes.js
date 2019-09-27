const { Book } = require("../models/Book.js");

module.exports = app => {
  // GET all saved books from db
  app.get("/books", (req, res) => {
    Book.find({})
      .then(books => res.json(books))
      .catch(e => console.log(e));
  });
  
  // POST a book to the db
  app.post("/books", (req, res) => {
    Book.create(req.body)
      .then(res.sendStatus(200))
      .catch(e => console.log(e));
  });

  // DELETE a book from the db
  app.delete("/books/:id", (req, res) => {
    Book.findByAndDelete(req.params.id)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e));
  });
};
