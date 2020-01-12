import React from 'react'
import { Link } from 'gatsby'
import { StyledNav, StyledList } from './Nav.styles'

const Nav = () => (
  <StyledNav>
    <StyledList>
      <li><Link to="/about/">About Me</Link></li>
      <li><Link to="/services/">Services</Link></li>
      {/* <li><Link to="/news/">News</Link></li> */}
      <li><Link to="/contact/">Contact</Link></li>
    </StyledList>
  </StyledNav>
)

export default Nav