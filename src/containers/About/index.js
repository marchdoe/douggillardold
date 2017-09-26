import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Box,
  Flex,
  Heading,
  Link,
  Small,
  Text } from 'rebass'

import { color } from '../../theme'

import Positions from '../../components/Positions'

const Content = styled(Box)``

const Aside = styled(Box)``

const Intro = styled(Text)`
  line-height: 1.6;
  font-weight: 700;
`

class About extends Component {
  render () {
    return (
      <Flex wrap>
        <Aside color={color.blue} w={[ 1, 1, 1 / 4 ]} py={4} px={[3, 4]}>
          <Heading f={5} mb={4} is='h1'>Doug March</Heading>
          <Text>Twitter <Link href='http://twitter.com/marchdoe'>@marchdoe</Link></Text>
          <Text>LinkedIn <Link href='http://linkedin.com/in/dougmarch'>/dougmarch</Link></Text>
          <Text>Github <Link href='http://github.com/marchdoe'>marchoe</Link></Text>
          <Text>Email <Link href='mailto:dougmarch@gmail.com'>dougmarch@gmail.com</Link></Text>
        </Aside>

        <Content w={[ 1, 1, 3 / 4 ]} py={4} px={[3, 4]}>
          <Intro f={[3, 4, 5]} mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus mauris at iaculis scelerisque. Fusce at tortor nisi. Suspendisse non iaculis libero.
          </Intro>

          <Heading mb={3} f={1} is='h4' color={color.green} caps>Skills</Heading>

          <Heading mb={3} f={1} is='h4' color={color.green} caps>Experience</Heading>

          <Positions />

          {/* <Position wrap mb={3}>
            <Box pr={4} width={[1, 1 / 3, 1 / 4]}>
              <Heading f={3} is='h2'>
                Wellmatch Health
              </Heading>
              <Text f={1}><i>2014-2017</i></Text>
            </Box>

            <Box width={[1, 2 / 3, 3 / 4]}>
              <Heading color={color.darkGray} f={2} is='h3'>
                Sr. Frontend Engineer
              </Heading>
              <ul>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>lobortis. Nam in luctus quam, in feugiat arcu. Aenean iaculis</li>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus mauris at iaculis </li>
                <li>something here</li>
              </ul>
            </Box>
          </Position> */}

          {/* <Position wrap mb={3}>
            <Box pr={4} width={[1, 1 / 3, 1 / 4]}>
              <Heading f={3} is='h2'>
                Interfolio
              </Heading>
              <Text f={1}><i>2014</i></Text>
            </Box>

            <Box width={[1, 2 / 3, 3 / 4]}>
              <Heading color={color.darkGray} f={2} is='h3'>Director of Engineering</Heading>
              <ul>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>lobortis. Nam in luctus quam, in feugiat arcu. Aenean iaculis</li>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus mauris at iaculis </li>
                <li>something here</li>
              </ul>
            </Box>
          </Position> */}

          {/* <Position wrap mb={3}>
            <Box pr={4} width={[1, 1 / 3, 1 / 4]}>
              <Heading f={3} is='h3'>LivingSocial</Heading>
              <Text f={1}><i>2010-2014</i></Text>
            </Box>

            <Box width={[1, 2 / 3, 3 / 4]}>
              <Heading color={color.darkGray} f={2} is='h3'>Lead Frontend Engineer</Heading>
              <ul>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>lobortis. Nam in luctus quam, in feugiat arcu. Aenean iaculis</li>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus mauris at iaculis </li>
                <li>something here</li>
              </ul>
            </Box>
          </Position> */}

          {/* <Position wrap mb={3}>
            <Box pr={4} width={[1, 1 / 3, 1 / 4]}>
              <Heading f={3} is='h3'>Logik</Heading>
              <Text f={1}><i>date - date</i></Text>
            </Box>

            <Box width={[1, 2 / 3, 3 / 4]}>
              <Heading color={color.darkGray} f={2} is='h3'>Lead Frontend Engineer</Heading>
              <ul>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>lobortis. Nam in luctus quam, in feugiat arcu. Aenean iaculis</li>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus mauris at iaculis </li>
                <li>something here</li>
              </ul>
            </Box>
          </Position> */}

          {/* <Position wrap mb={3}>
            <Box pr={4} width={[1, 1 / 3, 1 / 4]}>
              <Heading f={3} is='h3'>Mixx</Heading>
              <Text f={1}><i>date - date</i></Text>
            </Box>

            <Box width={[1, 2 / 3, 3 / 4]}>
              <Heading color={color.darkGray} f={2} is='h3'>Lead Frontend Engineer</Heading>
              <ul>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>lobortis. Nam in luctus quam, in feugiat arcu. Aenean iaculis</li>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus mauris at iaculis </li>
                <li>something here</li>
              </ul>
            </Box>
          </Position> */}

          {/* <Position wrap mb={3}>
            <Box pr={4} width={[1, 1 / 3, 1 / 4]}>
              <Heading f={3} is='h3'>Revolution Health</Heading>
              <Text f={1}><i>date - date</i></Text>
            </Box>

            <Box width={[1, 2 / 3, 3 / 4]}>
              <Heading color={color.darkGray} f={2} is='h3'>Lead Frontend Engineer</Heading>
              <ul>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>lobortis. Nam in luctus quam, in feugiat arcu. Aenean iaculis</li>
                <li>in feugiat arcu. Aenean iaculis felis vitae elit vestibulum vehicula</li>
                <li>dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus mauris at iaculis </li>
                <li>something here</li>
              </ul>
            </Box>
          </Position> */}

          <Heading mb={3} f={1} is='h4' color={color.green} caps>Education</Heading>

          <Flex wrap mb={3}>
            <Box width={1}>
              <Heading mb={2} f={3} is='h2'>The University of Dayton <Small f={1}>1995-1999</Small></Heading>

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
