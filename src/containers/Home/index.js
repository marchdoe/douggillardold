import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { Heading } from 'rebass'

import HeroImgSrc from './hero.jpg'

import { color } from '../../theme'

const Wrapper = styled.div`
  text-align: center;
`

const Hero = styled.div`
  text-align: center;
  min-height: 300px;
  background: url(${HeroImgSrc}) no-repeat left top;
  background-size: cover;
`

const MusicEmbed = styled.div`
  min-height: 150px;
  padding-top: 75px;
  text-transform: uppercase;
  color: ${color.gray6};
  background-color: ${color.gray1};
`

const StyledHeading = styled(Heading)`
  border-bottom: 1px dotted ${color.gray2};
  color: ${color.gray7};
`

class Home extends Component {
  render () {
    return (
      <Wrapper>
        <Hero>
          test
        </Hero>
        <MusicEmbed>
          put music embed here
        </MusicEmbed>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={'shows'}>Upcoming Shows</Link>
        </StyledHeading>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={''}>Music</Link>
        </StyledHeading>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={''}>Discography</Link>
        </StyledHeading>
        <StyledHeading py={3} f={4} is={'h2'}>
          <Link to={'about'}>About</Link>
        </StyledHeading>
      </Wrapper>
    )
  }
}

export default Home
