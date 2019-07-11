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
    console.log("search term fam: ", searchTerm)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAGDbzsUMeCa0dq4ANvOuWeZACpiZkSbpY`)
    .then(response => {
      const {
        title,
        authors,
        imageLinks,
        infoLink
      } = response.data.items[0].volumeInfo
      this.setState({ title, author: authors[0], image: imageLinks.smallThumbnail, link: infoLink })
    })
    .catch(error => {
      console.log(error)
    })

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
      clickHandler={this.handleSearchBook}
      />
      <h1>{this.state.title}</h1>
      <h1>{this.state.author}</h1>
      <img src={this.state.image}></img>
      <h1>{this.state.link}</h1>
      </>
    )
  }
}

export default App
