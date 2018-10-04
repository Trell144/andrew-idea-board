import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  getAllUsers = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

  render() {

    const userLinks = this.state.users.map((user, i) => {
      return <Link key={i} to={`/users/${user._id}`}>{user.userName}</Link>
    })

    return (
      <div>
        <h1>Login Page</h1>
        {userLinks}
      </div>
    )
  }
}
