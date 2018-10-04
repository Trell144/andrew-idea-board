import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IdeaBoard from './components/IdeaBoard'
import Home from './components/Home'
import Login from './components/Login';

class App extends Component {
  render() {
    const IdeaBoardComponent = (props) => (<IdeaBoard {...props} />)
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/users/:userId' component={IdeaBoardComponent} />
        </Switch>
      </Router>
    )
  }
}

export default App
