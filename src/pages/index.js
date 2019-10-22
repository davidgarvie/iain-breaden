import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/Layout';
import Logo from '../components/Logo';

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
  <Layout url={hero.file.url}>
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
      file {
        url
      }
    }
  }
}
`
