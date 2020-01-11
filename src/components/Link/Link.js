import React from 'react'
import { StyledLink } from './Link.styles'
import { Link } from 'gatsby'

export default ({ title, slug }) => {
  return (
    <StyledLink key={slug}>
      <Link to={`/services/${slug}`}>{title}</Link>
    </StyledLink>
  )
}
