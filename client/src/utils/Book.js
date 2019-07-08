import axios from 'axios'

const Book = {
  search: _ => axios.get('/search'),
  getBook: _ => axios.get('/api/books'),
  postBook: _ => axios.post('/api/books'),
  deleteBook: _ => axios.delete(`/api/books/${id}`)
}

export default Book
