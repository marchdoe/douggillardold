import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchProjects } from '../../actions/index'

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
  border-bottom: 2px dotted #e1e1e1;

  &:last-child { border: 0; }
`

const StyledHeading = styled(Heading)`
  color: ${color.gray7};
`

class Projects extends Component {
  componentWillMount () {
    this.props.fetchProjects()
  }

  renderProjects () {
    return this.props.projects.map((project, index) => {
      return (
        <StyledArticle pr={4} py={3} key={project.sys.id}>
          <StyledHeading pb={2} f={4} is={'h2'}>
            <Link href={project.fields.url}>
              {project.fields.title}
            </Link>
            <Link pl={3} color={'gray'} href={project.fields.source}>
              {project.fields.sourceName}
            </Link>
          </StyledHeading>
        </StyledArticle>
      )
    })
  }

  renderCompaniesWorkedWith () {
    return (
      <StyledArticle pr={4} py={3}>
        <StyledHeading pb={2} f={4} is={'h2'}>
          <span>logo 1</span>
          <span>logo 2</span>
          <span>logo 3</span>
          <span>logo 4</span>
          <span>logo 5</span>
        </StyledHeading>
      </StyledArticle>
    )
  }

  render () {
    return (
      <Wrapper p={3}>
        {this.renderProjects()}
        {/* <Divider w={1} color='blue' /> */}
        {this.renderCompaniesWorkedWith()}
      </Wrapper>
    )
  }
}

function mapStateToProps (state) {
  return { projects: state.projects.all }
}

export default connect(mapStateToProps, { fetchProjects })(Projects)
