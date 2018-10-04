import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { reverse } from 'dns';

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledIdeaMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  width: 70vw;
`

const StyledNewIdea = styled.div`
  background-color: lightblue;
  width: 80px;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`

const TempItem = styled.div`
  border: 1px solid black;
<<<<<<< HEAD
  width: 30vw;
  min-width: 100px;


=======
`

const StyledIdeaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70vw;
  padding: 10px;
`

const StyledIdea = styled.div`
  background-color: rgb(255, 255, 136);
  width: 150px;
  padding: 15px;
  padding-top: 0px;
>>>>>>> c284de0f094802c5012fe2a6be9807a63987f4fb
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

<<<<<<< HEAD
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
=======
  handleNew = async () => {
    const userId = this.props.match.params.userId
    const newIdea = await axios.post(`/api/users/${userId}/ideas`)
    console.log(newIdea)
  }
>>>>>>> c284de0f094802c5012fe2a6be9807a63987f4fb

  render() {
    const ideasList = this.state.ideas.map((idea, i) => {
      return (
        <StyledIdea key={i}>
<<<<<<< HEAD
        <div onClick={() => this.hanfdleDelete(idea._id)}>
        X
        </div>
        <input type='text' name='title' value={idea.title} onChange={this.handleChange/>
                <input type='text' name='description' value={idea.description} onChange={this.handleChange/>
=======
          <div>X</div>
          <h4>{idea.title}</h4>
>>>>>>> c284de0f094802c5012fe2a6be9807a63987f4fb
          <div>{idea.description}</div>
        <StyledIdea/>
      )
    })

    return (
      <StyledPageWrapper>
        <h1>Idea Board for {this.state.user.userName}</h1>
        <StyledIdeaMenu>
          <StyledNewIdea onClick={this.handleNew}>New Idea</StyledNewIdea>
          <TempItem>Thing to Sort</TempItem>
          <TempItem>Thing to Use Sometimes</TempItem>
        </StyledIdeaMenu>
        <StyledIdeaContainer>
          {ideasList}
        </StyledIdeaContainer>
      </StyledPageWrapper>
    )
  }
}
