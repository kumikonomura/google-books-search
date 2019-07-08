import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import SearchBox from './components/SearchBox'
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
  componentDidMount () {
    let searchTerm = this.state.searchTerm
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAGDbzsUMeCa0dq4ANvOuWeZACpiZkSbpY`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
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
      <h1>Google Books Search</h1>
      <h4>Search and save your favorite books</h4>
      <SearchBox 
      title={this.state.title}
      />
      </>
    )
  }
}

export default App
