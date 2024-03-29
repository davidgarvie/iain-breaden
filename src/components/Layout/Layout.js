import React from 'react';
import { Helmet } from "react-helmet"
import { Container, Hero } from './Layout.styles'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import "circular-std"
import 'normalize.css/normalize.css'
import '../../assets/main.css'

const HeroComponent = ({ children, hero }) => {
  return (
      <Hero 
        Tag="div"
        fluid={hero.fluid}
        backgroundColor=""
      >
        {children}
      </Hero>
  )
}

export default ({ children, description, hero, logo, title }) => {
  const x = (
    <Container>
        <Helmet>
          <meta charSet="utf-8" />
          {description && <meta name="description" content={description} />}
          {description && <meta name="google-site-verification" content="Eeck4SP4TsinEQpB5GHU68EnZResS9fTjMHqMU-dYzk" />}
          <title>{title || 'Iain Breaden Freelance'}</title>
          <html lang="en" />
        </Helmet>
      <Header logo={logo} />
      <main>{children}</main>
      <Nav />
    </Container>
  )
  if (hero) {
    return (
      <HeroComponent hero={hero}>
        {x}
      </HeroComponent>
    )
  }
  return x
}
