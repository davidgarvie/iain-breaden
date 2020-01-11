import React from 'react'
import Image from 'gatsby-image'
import Button from '../../components/Button'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'
import { Aside, Container, Content } from './Service.styles'

export default ({ data }) => {
  const { contentfulService: {  bannerImage, content, cta, title }} = data;
  const { contentfulLandingPage: { logo } } = data;
  const { childMarkdownRemark: { html } } =  content;

  return (
    <Layout logo={logo}>
      <Image fluid={bannerImage.image.fluid} />
      <Container>
        <Aside>
          <Title>{title}</Title>          
        </Aside>
        <section>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          <Button {...cta} />
        </section>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ServiceBySlug($slug: String!) {
    contentfulLandingPage {
      logo {
        file {
          url
        }
      }
    }
    contentfulService(slug: {eq: $slug}) {
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
      bannerImage { 
        image {
          fluid(maxWidth: 1180, background: "rgb:000000") {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`