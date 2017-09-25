import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchPosts } from '../../actions/index'
import { Box, Heading, Link, Text } from 'rebass'

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

class Posts extends Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    return this.props.posts.map((post, index) => {
      console.log(post.sys.space)
      return (
        <StyledArticle pr={4} py={3} key={post.sys.id}>
          <StyledHeading pb={2} f={4} is={'h2'}>
            <Link href={post.fields.source}>
              {post.fields.title}
            </Link>
          </StyledHeading>
          <Text f={2}>{post.fields.excerpt}</Text>
        </StyledArticle>
      )
    })
  }

  render () {

    return (
      <Wrapper p={3}>
        {this.renderPosts()}
      </Wrapper>
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(Posts)
