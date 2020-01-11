import React from 'react'
import { Link } from 'gatsby'
import { Header, Logo } from './Header.styles'
import MobileMenu from '../MobileMenu/MobileMenu';

export default ({ logo }) => {
  return (
    <Header>
      <Link to="/">
        <Logo size={logo.size} src={logo.file.url} />
      </Link>
      <MobileMenu />
    </Header>
  )
  };