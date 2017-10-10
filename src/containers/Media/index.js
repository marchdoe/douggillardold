import React, { Component } from 'react'
import styled from 'styled-components'

import { Box} from 'rebass'

const Wrapper = styled(Box)`
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`

class Media extends Component {
  render () {
    return (
      <Wrapper p={3} />
    )
  }
}

export default Media
