import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledIdeaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const StyledIdea = styled.div`
  background-color: yellow;
  width: 30vw;
  min-width: 200px;
`

const StyledDescription = styled.div`
  padding-bottom: 20px;
`

export default class IdeaBoard extends Component {
  state = {
    user: {},
    ideas: []
  }

  componentDidMount = () => {
    this.getUser()
  }

  getUser = async () => {
    const response = await axios.get(`/api/users/${this.props.match.params.userId}`)
    console.log(response)
    this.setState({
      user: response.data,
      ideas: response.data.ideas
    })
  }

  handleChange = (id, event) => {
    const ideas = [...this.state.ideas]
    const newIdeas = ideas.map((idea) => {
      if (idea._id === id) {
        idea[event.target.name] = event.target.value
      }
      return idea
    })
    this.setState({ ideas: newIdeas })
  }

  render() {
    const ideasStuff = this.state.ideas.map((idea, i) => {
      return (
        <StyledIdea key={i}>
          <h3>{idea.title}</h3>
          <StyledDescription>
            <input
              name='description'
              type='textArea'
              value={idea.description}
              onChange={(event) => this.handleChange(idea._id, event)} />
          </StyledDescription>
        </StyledIdea>
      )
    })

    return (
      <div>
        <h1>Idea Board for {this.state.user.userName}</h1>
        <StyledIdeaContainer>{ideasStuff}</StyledIdeaContainer>
      </div>
    )
  }
}
