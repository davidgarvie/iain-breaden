import React from 'react'
import Styled, { css } from 'styled-components';
import { graphql } from 'gatsby'
import Button from '../components/Button/Button';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

export default ({ data }) => {
  const { contentfulLandingPage: { logo } } = data
  return (
    <Layout logo={{...logo, size: 'large'}}>
      <Title>Great</Title>
      <p>Thanks for getting in touch. Grab a cuppa, relax and I'll be in touch soon.</p>
    </Layout>
  )
}


export const pageQuery = graphql`
query getSuccessPageContent {
  contentfulLandingPage {
    logo {
      file {
        url
      }
    }
  }
}
`
