import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Search from './pages/Search'
import Save from './pages/Save'
import SearchBox from './components/SearchBox'
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
      <Router>
        <NavBar />
        <SearchBox />
        <div>
          <Route
            exact path='/search'
            component={Search} />
          <Route
            path='/save'
            component={Save} />
        </div>
      </Router>
    )
  }
}

export default App
