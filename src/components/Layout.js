import React from 'react'
import Container from './Container'
import Nav from './Nav'

export default ({ children, hero }) => (
  <Container hero={hero}>
    {children}
    <Nav />
  </Container>
)
