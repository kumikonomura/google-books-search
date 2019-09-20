import axios from "axios";

const Books = {
  // GET saved books from the db
  getAll: _ => axios.get("/books"),
  // POST a new book to db
  postOne: book => axios.post("/books", book),
  // DELETE a book from db
  deleteOne: id => axios.delete(`/books/${id}`)
};

export default Books;
