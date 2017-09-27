import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Box,
  Flex,
  Heading,
  Progress,
  Small,
  Text } from 'rebass'

import { color } from '../../theme'

import Positions from '../../components/Positions'

const Content = styled(Box)``

const Intro = styled(Text)`
  line-height: 1.6;
  font-weight: 700;
`

class About extends Component {
  render () {
    return (
      <Flex wrap>

        {/* <Aside w={[ 1, 1, 1 / 3  ]} p={3}>
          <Heading color={color.blue} f={5} mb={4} is='h1'>Doug March</Heading>

          <Flex wrap>
            <Text w={1 / 2}>Email</Text>
            <Link w={1 / 2} href='mailto:dougmarch@gmail.com'>dougmarch@gmail.com</Link>

            <Text w={1 / 2}>Home</Text>
            <Link w={1 / 2} href='#'>Arlington, VA</Link>

            <Text w={1 / 2}>Twitter</Text>
            <Link w={1 / 2} href='http://twitter.com/marchdoe'>@marchdoe</Link>

            <Text w={1 / 2}>LinkedIn</Text>
            <Link w={1 / 2} href='http://linkedin.com/in/dougmarch'>/dougmarch</Link>

            <Text w={1 / 2}>Github</Text>
            <Link w={1 / 2} href='http://github.com/marchdoe'>marchoe</Link>
          </Flex>
        </Aside> */}

        <Content w={[ 1 ]} p={3}>

          <Intro f={[4, 5]} mb={4}>
            Need a good quality intro here
          </Intro>

          <Heading mb={3} f={1} is='h4' color={color.green} caps>Experience</Heading>

          <Positions />

          <Heading mb={3} f={1} is='h4' color={color.green} caps>Skills</Heading>
          <Flex mb={3} wrap>
            <Box w={[ 1, 1 / 3 ]} mb={4} pr={4}>
              <Text f={2}>HTML</Text>
              <Progress color={'#0088cc'} value={9 / 10} />
            </Box>
            <Box w={[ 1, 1 / 3 ]} mb={4} pr={4}>
              <Text f={2}>CSS</Text>
              <Progress color={'#0088cc'} value={9 / 10} />
            </Box>
            <Box w={[ 1, 1 / 3 ]} mb={4} pr={4}>
              <Text f={2}>Javascript</Text>
              <Progress color={'#0088cc'} value={4 / 10} />
            </Box>

            <Box w={[ 1, 1 / 3 ]} mb={4} pr={4}>
              <Text f={2}>HTML</Text>
              <Progress color={'#0088cc'} value={9 / 10} />
            </Box>
            <Box w={[ 1, 1 / 3 ]} mb={4} pr={4}>
              <Text f={2}>CSS</Text>
              <Progress color={'#0088cc'} value={9 / 10} />
            </Box>
            <Box w={[ 1, 1 / 3 ]} mb={4} pr={4}>
              <Text f={2}>Javascript</Text>
              <Progress color={'#0088cc'} value={4 / 10} />
            </Box>
          </Flex>

          <Heading mb={3} f={1} is='h4' color={color.green} caps>Education</Heading>

          <Flex wrap mb={3}>
            <Box width={1}>
              <Heading mb={2} f={3} is='h2'>
                The University of Dayton
                <Small ml={2} f={1}>1995-1999</Small>
              </Heading>

              <Heading color={color.darkGray} f={2} is='h3'>Bachelor of Fine Arts</Heading>
              <Text f={1}>Concentration in Digital Imaging</Text>
            </Box>
          </Flex>

        </Content>
      </Flex>
    )
  }
}

export default About
