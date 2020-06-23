import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { formatDistanceToNow } from 'date-fns'
import Styled from 'styled-components';
import Layout from '../components/Layout/Layout'
import Title from '../components/Title/Title';

const Grid = Styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 1em;

  .gatsby-image-wrapper {
    height: 300px;
  }
`

export default ({ data }) => {
  const { allContentfulPost: { nodes: posts } } = data
  const { contentfulLandingPage: { logo } } = data;

  if (!posts || posts.length === 0) {
    return (
      <Layout logo={logo}>
        <Title>Oops</Title>
        <p>There are no posts right now. Make sure to check back soon.</p>
      </Layout>
      )
  }

  

  return (
    <Layout logo={logo} >
      <Title>Posts</Title>
      <Grid>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>
              <h2>{post.title}</h2>
              <h3>Posted {formatDistanceToNow(new Date(post.date), { addSuffix: true })}</h3>
              <Image fluid={post.image.fluid} />
            </Link>
          </li>
        ))}
      </Grid>
    </Layout>
  )
}


export const pageQuery = graphql`
  query getAllPosts {
    contentfulLandingPage {
      logo {
        file {
          url
        }
      }
    }
    allContentfulPost(sort: {fields: date, order: DESC}) {
      nodes {
        slug
        title
        date
        content {
          childMarkdownRemark {
            html
            timeToRead
          }
        }
        image {
          fluid(maxWidth: 1180, background: "rgb:000000") {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
}
`
