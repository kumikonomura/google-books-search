import axios from "axios";

const Books = {
  // GET saved books from the db
  getAllBooks: _ => axios.get("/books"),
  // POST a new book to db
  saveBook: book => axios.post("http://localhost:4000/books", book),
  // DELETE a book from db
  deleteBook: id => axios.delete(`/books/${id}`)
};

export default Books;
