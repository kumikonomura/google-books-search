import React from 'react'
import axios from 'axios'
import SearchBox from '../../components/SearchBox'

class Search extends React.Component {
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

  render() {
    return (
      <>
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

export default Search
