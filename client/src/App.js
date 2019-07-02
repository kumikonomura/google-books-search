import React from 'react'
import axios from 'axios'
class App extends React.Component {
  componentDidMount() {

    // when talking to server, make sure to have a url like this: 
    // http://localhost:4000

    return axios.get('http://localhost:4000/search')
      .then(data => {
        console.log('here is some data for the api: ', data)
      })
  }

  render() {
    return (
      <h1>Book Search</h1>
    )
  }
}

export default App
