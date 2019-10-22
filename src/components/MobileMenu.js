import React from 'react'
import styled from 'styled-components'

const MobileMenu = styled.div`
  display: none; // temp
  position: fixed;
  top: 0;
  right: 0;

  input ~ .menu {
    display: none;
  }

  input:checked ~ .menu {
    display: block;
  }

  @media (min-width: 48em) {
    display: none;
  }
  
`

export default () => (
  <MobileMenu>
    <input id="burger" type="checkbox" />
    <label htmlFor="burger">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <div className="menu">
      <ul>
        <li><a href="#">Link #1</a></li>
        <li><a href="#">Link #2</a></li>
        <li><a href="#">Link #3</a></li>
      </ul>  
    </div>
  </MobileMenu>
)
