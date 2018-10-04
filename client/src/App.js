import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IdeaBoard from './components/IdeaBoard'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Home} />
          <Route exact path='/user/:userId' component={IdeaBoard} />
        </Switch>
      </Router>
    )
  }
}

export default App
