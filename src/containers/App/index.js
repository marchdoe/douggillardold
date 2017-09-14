import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, Provider } from 'rebass'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Wrapper = styled(Flex)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  main {
    flex: 1;
  }
`

class App extends Component {
  render () {
    return (
      <Provider>
        <Wrapper>
          <Header />
          <main>
            {this.props.children}
          </main>
          <Footer />
        </Wrapper>
      </Provider>
    )
  }
}

export default App
