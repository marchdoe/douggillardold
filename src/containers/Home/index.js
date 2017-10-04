import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { Box, Heading, Text } from 'rebass'

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
  margin-top: 20px;
  text-transform: uppercase;
  color: ${color.gray6};
  background-color: ${color.gray1};
`

const StyledSection = styled(Box)`
  border-bottom: 1px dotted ${color.gray2};
`

const StyledHeading = styled(Heading)`
  color: ${color.gray7};
`

class Home extends Component {
  render () {
    return (
      <Wrapper>
        <Hero>
          test
        </Hero>

        <StyledSection py={3} is='section'>
          <StyledHeading f={4} is={'h2'}>
            Upcoming Shows
          </StyledHeading>

          <Text>FRI 10.06.17 - Lexington, KY - The Burl</Text>
          <Text>SAT 10.07.17 - Morengo, OH - Hoof Hearted Brewing</Text>
          <Text>FRI 10.13.17 - Durham, NC - Motorco Music Hall</Text>
          <Text>SAT 10.14.17 - Columbia, SC - The Jam Room Music Festival</Text>

          <Link>View all</Link>
        </StyledSection>

        <StyledSection py={3} is='section'>
          <StyledHeading f={4} is={'h2'}>
            Music
          </StyledHeading>

          <Text>Info about latest album</Text>

          <Link>View discography</Link>

          <MusicEmbed>
            put music embed here
          </MusicEmbed>
        </StyledSection>

        <StyledSection py={3} is='section'>
          <StyledHeading f={4} is={'h2'}>
            About
          </StyledHeading>

          <Text>Short bio, links to about us page</Text>

          <Link>View discography</Link>
        </StyledSection>
      </Wrapper>
    )
  }
}

export default Home
