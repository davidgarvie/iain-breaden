import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components';
import Header from '../components/Header'
import Tile from '../components/Tile'
import Nav from '../components/Nav'

const Container = styled.div`
  margin: 0 auto;
  max-width: 72em;
  padding: 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 2em 0;

  > * {
    width: 100%;
    flex: 1 0 320px;
  }
`

const StyledImage = styled(Image)`
  @media (min-width: 768px) {
    margin-right: 1em;
  }
`

const StlyedNav = styled(Nav)`
  margin-top: auto;
`

const Title = styled.h1`
  margin: 0;
`

const Page = ({ data }) => {
  const { contentfulPage: { content, image, tile, title }} = data;
  const { contentfulLandingPage: { logo } } = data;
  const { childMarkdownRemark: { html } } =  content;
  return (
    <Container>
      <Header logo={logo} />
      <Main>
        <StyledImage fluid ={image.fluid} />
        <section>
          <Title>{title}</Title>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </Main>
      <Tile {...tile} />
      <StlyedNav />
    </Container>
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
        callToAction {
          displayText
          url
          type
        }
      }
    }
  }
`
