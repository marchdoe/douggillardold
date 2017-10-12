import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchShows } from '../../actions/index'

import { Box, Text } from 'rebass'

const StyledText = styled(Text)`
  font-size: 13px;
  margin-bottom: 8px;
`

class ShowsList extends Component {
  componentWillMount () {
    this.props.fetchShows()
  }

  renderShows () {
    return this.props.shows.sort((a, b) => a.fields.date2 > b.fields.date2).map((show, index) => {
      return (
        <StyledText key={show.sys.id}>
          {show.fields.date} -
          {show.fields.location}
          <a href={show.fields.venueWebsite}> {show.fields.venue}</a>
        </StyledText>
      )
    })
  }

  render () {
    return (
      <Box px={3}>
        {this.renderShows()}
      </Box>
    )
  }
}

function mapStateToProps (state) {
  return { shows: state.shows.all }
}

export default connect(mapStateToProps, { fetchShows })(ShowsList)
