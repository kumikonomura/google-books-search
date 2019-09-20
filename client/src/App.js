import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'
import Save from './pages/Save'
import NavBar from './components/NavBar'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Search} />
            <Route path='/saved' component={Save} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App