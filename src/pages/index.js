import React from 'react'
import Styled from 'styled-components';
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout';

const Content = Styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;

  @media (min-width: 48em) {
    font-size: 3rem;
  }
`

export default ({ data }) => {
  const { contentfulLandingPage: { hero, logo, content } } = data
  return (
    <Layout logo={logo} hero={hero}>
      <Content large>{content}</Content>
    </Layout>
  )
}


export const pageQuery = graphql`
query getLandingPageContent {
  contentfulLandingPage {
    content
    logo {
      file {
        url
      }
    }
    hero {
      fluid(maxWidth: 700, quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
}
`
