import React from 'react'
import { ListItem, StyledLink } from './Link.styles'

export default ({ heading, linkColor, slug }) => {
  const color = linkColor ? linkColor.hexCode : '#00fbbd';
  return (
    <ListItem key={slug}>
      <StyledLink color={color} to={`/services/${slug}`}>{heading}</StyledLink>
    </ListItem>
  )
}
