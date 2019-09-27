import React from "react";
import SearchBox from "../../components/Search/SearchBox";
import Card from "../../components/Search/Card";
import axios from "axios";
import Book from "../../utils/Book";

class Search extends React.Component {
  state = {
    isSearching: true,
    searchTerm: "",
    books: []
  };

  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  // This function will search for the book using the Google Books API
  handleSearchBook = searchTerm => {
    console.log("search term fam: ", searchTerm);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAGDbzsUMeCa0dq4ANvOuWeZACpiZkSbpY`
      )
      .then(({ data: { items } }) => {
        console.log(items);
        let books = this.state.books;
        items.forEach(item => {
          let bookResults = {
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            image: item.volumeInfo.imageLinks.smallThumbnail,
            description: item.volumeInfo.description,
            link: item.volumeInfo.infoLink,
            id: items.indexOf(item)
          };
          books.push(bookResults);
        });
        console.log(books);
        this.setState({
          books
        });
      });
  };

  // function to save book to database
  handleSaveBook = event => {
    console.log(event.target);
    console.log("button working");
    Book.saveBook(this.state.books[event.target.id]);
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
        <SearchBox
          handleSearchBook={this.handleSearchBook}
          handleSearchClear={this.handleSearchClear}
          handleInputChange={this.handleInputChange}
        />
        <Card books={this.state.books} handleSaveBook={this.handleSaveBook} />
      </>
    );
  }
}
export default Search;
