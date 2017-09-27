import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import styled from 'styled-components'
import { fetchPositions } from '../../actions/index'
import {
  Box,
  Flex,
  Heading,
  Small } from 'rebass'

import { color } from '../../theme'

const StyledHeading = styled(Heading)`
  border-bottom: 1px solid ${color.gray1};
`

const StyledBox = styled(Box)`
  ul {
    margin: 0;
    list-style: none;
    padding-left: 1.0em;

    li {
      margin: 0 0 1rem 0;
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

  renderMarkdown (content) {
    return {
      __html: marked(content, {sanitize: true})
    }
  }

  renderPositions () {
    return this.props.positions.map((position, index) => {
      return (
        <Flex wrap pb={3} mb={3} key={position.sys.id}>
          <StyledHeading is='h2' w={1} pb={3} mb={3} f={3}>
            {position.fields.company}
            <Small ml={3} f={1}>{position.fields.date}</Small>
          </StyledHeading>

          <Box mb={4} width={[1, 1 / 3, 1 / 4]}>
            <Heading f={2} is='h3'>{position.fields.title}</Heading>
          </Box>

          <StyledBox
            width={[1, 2 / 3, 3 / 4]}
            dangerouslySetInnerHTML={this.renderMarkdown(position.fields.description)}
          />
        </Flex>
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