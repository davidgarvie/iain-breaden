import React from 'react'
import { graphql } from 'gatsby';
import Content from '../../components/Content/Content'
import Layout from '../../components/Layout/Layout'
import Link from '../../components/Link/Link'
import Tile from '../../components/Tile/Tile'
import Title from '../../components/Title/Title'
import { Container, Links, Section, StyledImage } from './Page.styles'

const Page = ({ data }) => {
  const { contentfulPage: { content, description, image, links, tile, heading, title }} = data;
  const { contentfulLandingPage: { logo } } = data;
  const { childMarkdownRemark: { html } } =  content;
  const metaDescription = description && description.childMarkdownRemark.rawMarkdownBody
  return (
    <Layout logo={logo} description={metaDescription} title={title}>
      <Container>
        {image && <StyledImage fluid ={image.fluid} />}
        <Section>
          <Title>{heading}</Title>
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
    contentfulLandingPage {
      logo {
        file {
          url
        }
      }
    }
    contentfulPage(slug: { eq: $slug }) {
      heading
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
        heading
        slug
        linkColor {
          hexCode
        }
      }
      title
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`
