import React from 'react'
import Container from './Container'
import Nav from './Nav'
import '../assets/main.css'

export default ({ children, url }) => (
  <Container url={url}>
    {children}
    <Nav />
  </Container>
)
