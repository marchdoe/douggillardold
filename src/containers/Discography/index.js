import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchDiscography } from '../../actions/index'

import {
  Box,
  Heading,
  Link,
  Small } from 'rebass'

import { color } from '../../theme'

const Wrapper = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`

const StyledArticle = styled(Box)`
  border-bottom: 2px dotted ${color.gray1};

  &:last-child { border: 0; }
`

const StyledHeading = styled(Heading)`
  color: #666;
`

class Discography extends Component {
  componentWillMount () {
    this.props.fetchDiscography()
  }

  renderDiscography () {
    return this.props.discography.map((album, index) => {
      console.log(album)
      return (
        <StyledArticle pr={5} py={4} key={album.sys.id}>
          <StyledHeading f={4} is={'h2'}>
            <Link href="#">
              {album.fields.title} - {album.fields.artist} ::  <Small>{album.fields.date}</Small>
            </Link>
            <p>{album.fields.description}</p>
          </StyledHeading>
        </StyledArticle>
      )
    })
  }

  render () {
    return (
      <Wrapper p={3}>
        {this.renderDiscography()}
      </Wrapper>
    )
  }
}

function mapStateToProps (state) {
  return { discography: state.discography.all }
}

export default connect(mapStateToProps, { fetchDiscography })(Discography)
