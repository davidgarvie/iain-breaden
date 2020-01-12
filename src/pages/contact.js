import React from 'react'
import Styled, { css } from 'styled-components';
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';
import { Button } from '../components/Button/Button.styles';

export const Aside = Styled.aside`
  min-width: 20em;
`

export const Container = Styled.div`
  @media (min-width: 48em) {
    display: flex;
    padding: 4em;
  }
`

export const inputStyles = css`
width: 100%;
margin-bottom: 1em;
padding: 0.4em 0.8em;
font-size: 1rem;
color: inherit;
border-radius: 4px;
border: 3px solid rgba(0, 0, 0, 0.7);
outline: none;

&:focus {
  border-color: #00fbbd;
}
`

export const Section = Styled.section`
 p {
   margin-top: 0;
 }
`

const Input = Styled.input`
  ${inputStyles}
`

const TextArea = Styled.textarea`
  ${inputStyles}
  resize: none;
`

export default ({ data }) => {
  const { contentfulLandingPage: { logo } } = data
  return (
    <Layout logo={{...logo, size: 'large'}}>
      <Container>
        <Aside>
          <Title>Say Hello.</Title>
        </Aside>
        <Section>
          <p>Want to talk about a project? Or to grab a coffee & run through some ideas? Get in touch using the form below, send an email or give me a call</p>
          <form action="/success" method="POST" data-netlify="true">
            <Input type="text" placeholder="Name" name="name"/>
            <Input type="text" placeholder="Email" name="email" />
            <Input type="text" placeholder="Telephone" name="telephone" />
            <TextArea rows="4" cols="50" placeholder="Enquiry" name="enquiry" />
            <Button primary type="submit">Submit</Button>
          </form>      
        </Section>
      </Container>
    </Layout>
  )
}


export const pageQuery = graphql`
query getContactPageContent {
  contentfulLandingPage {
    logo {
      file {
        url
      }
    }
  }
}
`
