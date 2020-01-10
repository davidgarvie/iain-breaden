import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Header = styled.header`
  margin-top: 1em;
`

const StyledLogo = styled(Logo)`
  margin: 0 auto;
  max-width: 5em;
`
export default ({ logo }) => (
  <Header>
    <StyledLogo url={logo.file.url} />
  </Header>
)