import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  font-size: 11px;
  text-align: center;
  border-top: 2px solid #e1e1e1;
  color: #aaa;
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 1rem;

  span {
    margin-right: .6rem;
    font-weight: bold;
    color: #888;
  }
`

class Footer extends Component {
  render () {
    return (
      <StyledFooter>
        <span>doug march</span> design, development &amp; music intelligence
      </StyledFooter>
    )
  }
}

export default Footer
