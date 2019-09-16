import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Save from "./pages/Save";
import axios from "axios";
class App extends React.Component {
  // when talking to server, make sure to have a url like this:
  // http://localhost:4000

  //   return axios.get('http://localhost:4000/search')
  //     .then(data => {
  //       console.log('here is some data for the api: ', data)
  //     })
  // }
  state = {
    isSearching: true,
    searchTerm: "",
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    book: {
      title: "",
      author: "",
      description: "",
      image: "",
      link: ""
    }
  };
  // This function will search for the book using the Google Books API
  handleSearchBook = searchTerm => {
    console.log("search term fam: ", searchTerm);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAGDbzsUMeCa0dq4ANvOuWeZACpiZkSbpY`
      )
      .then(response => {
        console.log(response)
        const {
          title,
          authors,
          imageLinks,
          description,
          infoLink
        } = response.data.items[0].volumeInfo;
        console.log(response);
        this.setState({
          title,
          author: authors[0],
          image: imageLinks.smallThumbnail,
          description,
          link: infoLink
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // this function will clear the search box
  handleSearchClear = _ => {
    this.setState({
      searchTerm: "",
      title: "",
      author: "",
      description: "",
      image: "",
      link: ""
    });
  };

  toggleView = _ => {
    this.setState({
      isSearching: !this.state.isSearching
    });
  };
  render() {
    return (
      <>
        <NavBar toggleView={this.toggleView} />
        {this.state.isSearching ? (
          <Search
            clickHandler={this.handleSearchBook}
            title={this.state.title}
            author={this.state.author}
            image={this.state.image}
            description={this.state.description}
            link={this.state.link}
            handleSearchClear={this.handleSearchClear}
          />
        ) : (
          <Save />
        )}
      </>
    );
  }
}

export default App;
