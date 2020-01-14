import React from 'react'
import { graphql } from 'gatsby';
import Image from 'gatsby-image'
import Button from '../../components/Button/Button'
import Content from '../../components/Content/Content'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'
import { Aside, Container, Section } from './Service.styles'

export default ({ data }) => {
  const { contentfulService: {  bannerImage, content, cta, description, heading, title }} = data;
  const { contentfulLandingPage: { logo } } = data;
  const { childMarkdownRemark: { html } } =  content;
  const metaDescription = description && description.childMarkdownRemark.rawMarkdownBody

  return (
    <Layout logo={logo} description={metaDescription} title={title}>
      {bannerImage && <Image fluid={bannerImage.image.fluid} />}
      <Container>
        <Aside>
          <Title>{heading}</Title>
        </Aside>
        <Section>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          {cta && <Button {...cta} />}
        </Section>
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
      heading
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
      title
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`
