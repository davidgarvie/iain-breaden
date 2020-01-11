import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import "circular-std"
import 'normalize.css/normalize.css'
import '../assets/main.css'

const Content = styled.p`
  font-size: 1.5rem;
  max-width: 32em;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 48em) {
      font-size: 2em;
  }
`

const Index = ({ data: { contentfulLandingPage: { hero, logo, content } } }) => (
  <Layout hero={hero}>
    <Logo url={logo.file.url} />
    <Content>{content}</Content>
  </Layout>
)

export default Index

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
