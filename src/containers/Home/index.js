import React, { Component } from 'react'
import styled from 'styled-components'

import ShowsList from '../../components/ShowsList'
// import { Link } from 'react-router'

import {
  Border,
  Box,
  Text } from 'rebass'

import HeroImgSrc from './hero.jpg'

const Wrapper = styled.div`
  text-align: center;
`

const Hero = styled.div`
  text-align: center;
  min-height: 200px;
  background: url(${HeroImgSrc}) no-repeat left center;
  background-size: cover;

  @media (min-width: 40em) {
    min-height: 325px;
  }

  @media (min-width: 64em) {
    min-height: 450px;
  }
`

const MusicEmbed = styled.div`
  padding-top: 30px;
`

const StyledSection = styled(Box)``


const StyledIframe = styled.iframe`
  border: 0;
`

class Home extends Component {
  render () {
    return (
      <Wrapper>
        <Hero />

        <StyledSection pb={4} is='section'>
          <Border
            py={2}
            mb={4}
            top
            bottom>
            Upcoming Shows
            {/* <Link to={'discography'}>
              <Small ml={2}>View all</Small>
            </Link> */}
          </Border>

          <ShowsList />

        </StyledSection>

        <StyledSection is='section'>
          <Border
            py={2}
            mb={2}
            top
            bottom>
            Music
            {/* <Link to={'discography'}>
              <Small ml={2}>Discography</Small>
            </Link> */}
          </Border>

          {/* <Text>Info about latest album</Text> */}

          <MusicEmbed>
            <StyledIframe src="//bandcamp.com/EmbeddedPlayer/album=1476894231/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/t=1/transparent=true/" seamless>
              <a href="//douggillard.bandcamp.com/album/parade-on">
                Parade On by doug gillard
              </a>
            </StyledIframe>
          </MusicEmbed>
        </StyledSection>

        <StyledSection pb={4} is='section'>
          <Border
            py={2}
            mb={4}
            top
            bottom>
            About
            {/* <Link to={'about'}></Link> */}
          </Border>

          <Text>Short bio, links to about us page</Text>
        </StyledSection>
      </Wrapper>
    )
  }
}

export default Home
