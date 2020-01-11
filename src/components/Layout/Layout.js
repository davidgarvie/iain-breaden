import React from 'react';
import { Container, Hero } from './Layout.styles'
import Header from '../Header'
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

export default ({ children, hero, logo }) => {

  const x = (
    <Container>
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
