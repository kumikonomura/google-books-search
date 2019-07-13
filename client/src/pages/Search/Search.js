import React from 'react'
import axios from 'axios'
import SearchBox from '../../components/SearchBox'
import Card from '../../components/Card'

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
          description,
          infoLink
        } = response.data.items[0].volumeInfo
        console.log(response)
        this.setState({ title, author: authors[0], image: imageLinks.smallThumbnail, description, link: infoLink })
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
        <Card 
        title={this.state.title}
        author={this.state.author}
        image={this.state.image}
        description={this.state.description}
        link={this.state.link}
        />
        {/* <h1>{this.state.title}</h1>
        <h1>{this.state.author}</h1>
        <img src={this.state.image}></img>
        <h5>{this.state.description}</h5>
        <h3>{this.state.link}</h3> */}
      </>
    )
  }
}

export default Search
