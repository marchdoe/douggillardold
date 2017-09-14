import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchProjects } from '../../actions/index'
import { Box, Heading, Link } from 'rebass'

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
  color: #666;
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
              <small>[s]</small>
            </Link>
          </StyledHeading>
        </StyledArticle>
      )
    })
  }

  render () {
    return (
      <Wrapper p={3}>
        {this.renderProjects()}
      </Wrapper>
    )
  }
}

function mapStateToProps (state) {
  return { projects: state.projects.all }
}

export default connect(mapStateToProps, { fetchProjects })(Projects)
