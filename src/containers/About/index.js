import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Flex } from 'rebass'

const Wrapper = styled(Flex)`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem;
`

class About extends Component {
  render () {
    return (
      <Wrapper>
        Nice layout here with About information
      </Wrapper>
    )
  }
}

export default About
