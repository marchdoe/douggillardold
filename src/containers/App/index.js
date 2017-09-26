import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Provider } from 'rebass'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { color } from '../../theme'

const Wrapper = styled(Flex)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const StyledMain = styled(Box)`
  flex: 1;
  background-color: ${color.gray0};
`

class App extends Component {
  render () {
    return (
      <Provider>
        <Wrapper>
          <Header />
          <StyledMain>
            {this.props.children}
          </StyledMain>
          <Footer />
        </Wrapper>
      </Provider>
    )
  }
}

export default App
