import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { reverse } from 'dns';

const StyledIdea = styled.div`
  background-color: yellow;
  border: 1px solid black;
  width: 30vw;
  min-width: 100px;


`

export default class IdeaBoard extends Component {
  state = {
    user: {},
    ideas: []
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      user: response.data,
      ideas: response.data.ideas.reverse()
    })
  }

  componentDidMount = () => {
    this.getUser()
  }

  handleNew = (()=> {
    const userId = this.props.match.params.userId
    const newIdea = await axios.post(`/api/users/${userId}/ideas`)
    await this.getUser()
  })

  hanfdleDelete = async (ideaId) => {
    const userId = this.props.match.params.userId
    await axios.delete(`/api/users/${userId}/ideas/${ideaId}`)
    await this.this.getUser()
  })

  render() {
    const ideasList = this.state.ideas.map((idea, i) => {
      return (
        <StyledIdea key={i}>
        <div onClick={() => this.hanfdleDelete(idea._id)}>
        X
        </div>
        <input type='text' name='title' value={idea.title} onChange={this.handleChange/>
                <input type='text' name='description' value={idea.description} onChange={this.handleChange/>
          <div>{idea.description}</div>
        <StyledIdea/>
      )
    })

    return (
      <div>
        <h1>Idea Board for {this.state.user.userName}</h1>
        {ideasList}
      </div>
    )
  }
}
