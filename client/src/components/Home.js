//import react and the links wrriten in react router
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!!!</h1>
        <Link to='/login'>Log In</Link>
      </div>
    )
  }
}
