import React from 'react'
import { ListItem, StyledLink } from './Link.styles'

export default ({ heading, slug }) => {
  return (
    <ListItem key={slug}>
      <StyledLink to={`/services/${slug}`}>{heading}</StyledLink>
    </ListItem>
  )
}
