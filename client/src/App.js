import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Search from './pages/Search'
class App extends React.Component {
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
        <NavBar />
        <Search />
      </>
    )
  }
}

export default App
