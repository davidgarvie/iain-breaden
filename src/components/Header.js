import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from './Logo'

const Header = styled.header`
  margin: 0 auto 4em;
`

const StyledLogo = styled(Logo)`
  margin: 0 auto;
  max-width: 5em;
`
export default ({ logo }) => (
  <Header>
    <Link to="/"><StyledLogo url={logo.file.url} /></Link>
  </Header>
)