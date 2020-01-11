import React from 'react'
import Tile from '../../components/Tile'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'
import { Container, StyledImage } from './Page.styles'

const Page = ({ data }) => {
  const { contentfulPage: { content, image, tile, title }} = data;
  const { contentfulLandingPage: { logo } } = data;
  const { childMarkdownRemark: { html } } =  content;
  return (
    <Layout logo={logo}>
      <Container>
        <StyledImage fluid ={image.fluid} />
        <section>
          <Title>{title}</Title>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </Container>
      <Tile {...tile} />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulLandingPage {
      logo {
        file {
          url
        }
      }
    }
    contentfulPage(slug: { eq: $slug }) {
      title
      image {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      
      tile {
        title
        content {
          childMarkdownRemark {
            html
          }
        }
        cta {
          displayText
          url
          type
        }
      }
    }
  }
`
