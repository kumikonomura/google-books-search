import React from "react";
import SearchBox from "../../components/Search/SearchBox";
import Card from "../../components/Search/Card";
import axios from "axios";
import Book from "../../utils/Book";
import Books from "../../utils/Book";

class Search extends React.Component {
  state = {
    isSearching: true,
    searchTerm: "",
    books: []
    // title: "",
    // author: "",
    // description: "",
    // image: "",
    // link: "",
    // savedTitle: "",
    // savedAuthor: "",
    // savedDescription: "",
    // savedImage: "",
    // savedLink: ""
  };

  handleSearchBook = searchTerm => {
    console.log('search term fam', searchTerm)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAGDbzsUMeCa0dq4ANvOuWeZACpiZkSbpY`
    )
    .then(({data: {items}}) => {
      console.log(items)
      let books = []
      items.forEach((item) => {
        let bookResult = {
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          image: item.volumeInfo.imageLinks,
          description: item.volumeInfo.description,
          link: item.volumeInfo.infoLink,
        }
        books.push(bookResult)
      })
      this.setState({ books })
    })
    .catch(error => console.log(error))
  }

  // This function will search for the book using the Google Books API
  // handleSearchBook = searchTerm => {
  //   console.log("search term fam: ", searchTerm);
  //   axios
  //     .get(
  //       `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAGDbzsUMeCa0dq4ANvOuWeZACpiZkSbpY`
  //     )
  //     .then(response => {
  //       console.log(response);
  //       const {
  //         title,
  //         authors,
  //         imageLinks,
  //         description,
  //         infoLink
  //       } = response.data.items[0].volumeInfo;
  //       console.log(response);
  //       this.setState({
  //         title,
  //         author: authors[0],
  //         image: imageLinks.smallThumbnail,
  //         description,
  //         link: infoLink
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  // function to save book to database
  handleSaveBook = event => {
    event.preventDefault();
    console.log(event.target);
    const { title, author, image, description, link } = this.state;
    let savedTitle = title;
    let savedAuthor = author;
    let savedImage = image;
    let savedDescription = description;
    let savedLink = link;
    console.log("saved function working");
    Books.postOne(savedTitle)
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
        {this.state.title && (
          <Card
            title={this.state.title}
            author={this.state.author}
            image={this.state.image}
            description={this.state.description}
            link={this.state.link}
            handleSaveBook={this.handleSaveBook}
          />
        )}
      </>
    );
  }
}
export default Search;

// import React from "react";
// import SearchBox from "../../components/Search/SearchBox";
// import Card from "../../components/Search/Card";

// const Search = props => {
//   return (
//     <>
//       <SearchBox
//         clickHandler={props.clickHandler}
//         handleSearchClear={props.handleSearchClear}
//       />
//       {props.title && (
//         <Card
//           title={props.title}
//           author={props.author}
//           image={props.image}
//           description={props.description}
//           link={props.link}
//         />
//       )}
//     </>
//   );
// };

// export default Search;
