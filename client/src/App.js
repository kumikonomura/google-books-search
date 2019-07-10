import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import SearchBox from './components/SearchBox'
import NavBar from './components/NavBar'
class App extends React.Component {
  state = {
    searchTerm: '',
    title: '',
    author: '',
    description: '',
    image: '',
    link: '',
    book: {
      title: '',
      author: '',
      description: '',
      image: '',
      link: ''
    }
  }
// This function will search for the book using the Google Books API
  handleSearchBook = searchTerm => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAGDbzsUMeCa0dq4ANvOuWeZACpiZkSbpY`)
    .then(response => {
      const {
        title,
        authors,
        imageLinks,
        infoLink
      } = response.data.items[0].volumeInfo
      this.setState({ title, author: authors[0], image: imageLinks, link: infoLink })
    })
    .catch(error => {
      console.log(error)
    })

  }

  handleSearchButton = _ => {
    console.log('click working')
    this.handleSearchBook('')
  }

  // componentDidMount () {
  //   this.searchTerm = 'Harry Potter'
  //   this.handleSearchBook('Harry Potter and the Chamber of Secrets')
  // }
    // when talking to server, make sure to have a url like this:
    // http://localhost:4000

  //   return axios.get('http://localhost:4000/search')
  //     .then(data => {
  //       console.log('here is some data for the api: ', data)
  //     })
  // }

  render () {
    return (
      <>
      <NavBar/>
      <SearchBox 
      clickHandler={this.handleSearchButton}
      />
      </>
    )
  }
}

export default App
