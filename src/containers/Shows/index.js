import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchShows } from '../../actions/index'

import {
  Box,
  Heading,
  Link } from 'rebass'

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

class Shows extends Component {
  componentWillMount () {
    this.props.fetchShows()
  }

  renderShows () {
    return this.props.shows.map((show, index) => {
      console.log(show)
      return (
        <StyledArticle pr={5} py={4} key={show.sys.id}>
          <StyledHeading f={4} is={'h2'}>
            <Link href="#">
              {show.fields.date} - {show.fields.location} ::  {show.fields.venue}
            </Link>
            <p>{show.fields.additionalInfo}</p>
          </StyledHeading>
        </StyledArticle>
      )
    })
  }

  render () {
    return (
      <Wrapper p={3}>
        {this.renderShows()}
      </Wrapper>
    )
  }
}

function mapStateToProps (state) {
  return { shows: state.shows.all }
}

export default connect(mapStateToProps, { fetchShows })(Shows)
