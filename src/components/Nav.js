import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MobileMenu from './MobileMenu'

const StyledList = styled.ul`
  display: none;
  font-size: 1.2rem;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  max-width: 32em;
  padding: 0;

  li {
    padding: 0 1em;
    text-align: center;
  }

  @media (min-width: 48em) {
    display: flex;
    font-size: 1.5rem;
  }
`

const Nav = () => (
  <nav>
    <MobileMenu />
    <StyledList>
      <li><Link to="/about/">About Me</Link></li>
      <li><Link to="/services/">Services</Link></li>
      <li><Link to="/news/">News</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </StyledList>
  </nav>
)

export default Nav
