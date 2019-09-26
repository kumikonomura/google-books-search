import axios from "axios";

const Book = {
  // GET saved books from the db
  getAllBooks: _ => axios.get("/books"),
  // POST a new book to db
  postOneBook: book => axios.post("/books", book),
  // DELETE a book from db
  deleteOneBook: _id => axios.delete(`/books/${_id}`),
};

export default Book;
