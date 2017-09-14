import React, { Component } from 'react'
import { Link } from 'react-router'
import LogoImg from './logo.png'

class Logo extends Component {
  render () {
    return (
      <Link to={'/'}>
        <img src={LogoImg} alt={'logo'} />
      </Link>
    )
  }
}

export default Logo
