import React, { Component } from 'react'
import styled from 'styled-components'

import { color } from '../../theme'

const StyledHeader = styled.header`
  background-color: ${color.white};
  text-align: center;
  min-height: 100px;
  padding-top: 40px;
  text-transform: uppercase;
  color: ${color.gray6};
`

class Header extends Component {
  render () {
    return (
      <StyledHeader>
        Header
      </StyledHeader>
    )
  }
}

export default Header
