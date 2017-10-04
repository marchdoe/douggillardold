import React, { Component } from 'react'
import styled from 'styled-components'

import { color } from '../../theme'

const StyledFooter = styled.footer`
  font-size: 11px;
  text-align: center;
  border-top: 1px solid ${color.gray1};
  background-color: ${color.gray0};
  color: ${color.gray5};
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 1rem;

  span {
    font-weight: bold;
    color: ${color.gray7};
  }
`

class Footer extends Component {
  render () {
    return (
      <StyledFooter>
        <span>doug Gillard</span>
      </StyledFooter>
    )
  }
}

export default Footer
