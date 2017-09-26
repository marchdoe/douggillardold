import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import styled from 'styled-components'
import { fetchPositions } from '../../actions/index'
import {
  Box,
  Flex,
  Heading,
  Text } from 'rebass'

import { color } from '../../theme'

const Position = styled(Flex)``

const StyledBox = styled(Box)`

  ul {
    margin-bottom: 0;
    list-style: none;
    padding-left: 1.0em;

    li {
      margin: .5rem 0;
    }

    li:before {
      content: "•";
      margin: 0 .5em .1em -.85em;
      color: ${color.gray2};
    }
  }
`

class Positions extends Component {

  componentWillMount () {
    this.props.fetchPositions()
  }

  renderMarkdown(content) {
    return {
      __html: marked(content, {sanitize: true})
    }
  }

  renderPositions () {
    return this.props.positions.map((position, index) => {
      return (
        <Position wrap pb={4} mb={4} key={position.sys.id}>
          <Box width={[1, 1 / 3, 1 / 4]}>
            <Heading f={3} is='h2'>{position.fields.company}</Heading>
            <Text mb={3} f={0}><i>{position.fields.date}</i></Text>
            <Heading f={2} is='h3'>{position.fields.title}</Heading>
          </Box>

          <StyledBox
            pl={4}
            mt={1}
            width={[1, 2 / 3, 3 / 4]}
            dangerouslySetInnerHTML={this.renderMarkdown(position.fields.description)}
          />
        </Position>
      )
    })
  }

  render () {

    return (
      <div>
        {this.renderPositions()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log({positions: state.positions.all})
  return { positions: state.positions.all }
}

export default connect(mapStateToProps, { fetchPositions })(Positions)
