import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import moment from 'moment'
import Layout from '../components/Layout/Layout'
import Title from '../components/Title/Title';
import { Grid } from './Posts.style.js'


export default ({ data }) => {
  const { allContentfulPost: { nodes: posts } } = data
  const { contentfulLandingPage: { logo } } = data;

  return (
    <Layout logo={logo} >
      <Title>Posts</Title>
      <Grid>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>
              <h2>{post.title}</h2>
              <h3>Posted {moment(post.date).fromNow()}</h3>
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
