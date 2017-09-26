import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from '../Logo'

import { color } from '../../theme'

const StyledHeader = styled.header`
  background-color: ${color.white};
  border-bottom: 8px solid ${color.gray2};
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
