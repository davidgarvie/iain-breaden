import React from 'react';
import { Container } from './Layout.styles'
import Header from '../Header'
import Nav from '../Nav'
import "circular-std"
import 'normalize.css/normalize.css'
import '../assets/main.css'


export default ({ children, logo }) => (
  <Container>
    <Header logo={logo} />
    <main>{children}</main>
    <Nav />
  </Container>
)