import React from 'react'
import { ListItem, StyledLink } from './Link.styles'

export default ({ title, slug }) => {
  return (
    <ListItem key={slug}>
      <StyledLink to={`/services/${slug}`}>{title}</StyledLink>
    </ListItem>
  )
}
