import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { Box, Flex } from 'rebass'

import { color } from '../../theme'

const StyledHeader = styled(Flex)`
  background-color: ${color.white};
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  padding-left: 1rem;
  padding-right: 1rem;
`

class Header extends Component {
  render () {
    return (
      <StyledHeader is='header'>
        <Box pl={3} py={4}>
          <StyledLink to={'/'}>Doug Gillard</StyledLink>
        </Box>
        <Box pr={3} py={4} ml='auto'>
          <StyledLink to={'shows'}>Upcoming Shows</StyledLink>
          <StyledLink to={'discography'}>Discography</StyledLink>
          <StyledLink to={'media'}>Media</StyledLink>
          <StyledLink to={'about'}>About</StyledLink>
        </Box>
      </StyledHeader>
    )
  }
}

export default Header
