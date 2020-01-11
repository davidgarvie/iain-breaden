import React from 'react';
import { Container } from './Layout.styles'
import Header from '../Header'
import Nav from '../Nav'

export default ({ children, logo }) => (
  <Container>
    <Header logo={logo} />
    <main>{children}</main>
    <Nav />
  </Container>
)