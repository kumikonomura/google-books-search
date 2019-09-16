import axios from "axios";

const Book = {
  search: _ => axios.get("/search"),
  // GET all saved books from the db
  getBook: _ => axios.get("/api/books"),
  // POST a new book to db
  postBook: _ => axios.post("/api/books"),
  // DELETE a book from db
  deleteBook: _id => axios.delete(`/api/books/${_id}`)
};

export default Book;
