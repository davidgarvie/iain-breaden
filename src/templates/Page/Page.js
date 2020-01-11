import React from 'react'
import { graphql } from 'gatsby';
import Tile from '../../components/Tile'
import Content from '../../components/Content/Content'
import Layout from '../../components/Layout/Layout'
import Link from '../../components/Link/Link'
import Title from '../../components/Title/Title'
import { Container, Links, Section, StyledImage } from './Page.styles'

const Page = ({ data }) => {
  const { contentfulPage: { content, image, links, tile, title }} = data;
  const { contentfulLandingPage: { logo } } = data;
  const { childMarkdownRemark: { html } } =  content;
  return (
    <Layout logo={logo}>
      <Container>
        {image && <StyledImage fluid ={image.fluid} />}
        <Section>
          <Title>{title}</Title>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Section>
      </Container>
      {tile && <Tile {...tile} />}
      {links && (
        <Links>
          {links.map(Link)}
        </Links>
      )}
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
      links {
        title
        slug
      }
    }
  }
`
