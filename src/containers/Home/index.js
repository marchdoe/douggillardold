import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { Heading } from 'rebass'

const Wrapper = styled.div`
  text-align: center;
`

const StyledHeading = styled(Heading)`
  border-bottom: 2px dotted #e1e1e1;
  color: #666;
`

class Home extends Component {
  render () {
    return (
      <Wrapper>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={'about'}>I make websites</Link>
        </StyledHeading>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={'posts'}>find stuff</Link>
        </StyledHeading>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={'projects'}>create things</Link>
        </StyledHeading>
        {/* <h2>make food,</h2>
        <h2>&amp; play golf.</h2> */}
      </Wrapper>
    )
  }
}

export default Home
