import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from '../Logo'

const StyledHeader = styled.header`
  background-color: #fff;
  border-bottom: 5px solid #e1e1e1;
  text-align: center;
  min-height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
`

class Header extends Component {
  render () {
    return (
      <StyledHeader>
        <Logo />
      </StyledHeader>
    )
  }
}

export default Header
