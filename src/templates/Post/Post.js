import React from 'react'
import { graphql } from 'gatsby';
import { formatDistanceToNow } from 'date-fns'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'
import {Container, Content, StyledImage, SubHeading} from './Post.styles';

export default ({ data }) => {
  const { contentfulPost: {  content, date, image, title }} = data;
  const { contentfulLandingPage: { logo } } = data;
  const { childMarkdownRemark: { html, timeToRead } } =  content;
  return (
    <Layout logo={logo} >
      <Container>
        <Title>{title}</Title>
        <SubHeading>Posted {formatDistanceToNow(new Date(date), { addSuffix: true })}. About a {timeToRead} minute read.</SubHeading>
        <StyledImage fluid={image.fluid} />
        <Content 
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`




  query PostBySlug($slug: String!) {
    contentfulLandingPage {
      logo {
        file {
          url
        }
      }
    }
    contentfulPost(slug: { eq: $slug }) {
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
`
