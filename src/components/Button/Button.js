import React from 'react'
import { Link } from 'gatsby'
import { StyledButton } from './Button.styles'

const Button = ({ displayText, type }) => {
  const primary = type && type.toLowerCase() === 'primary';
  return <StyledButton primary={primary}>{displayText}</StyledButton>
}

const withLink = (Component) => {
  return ({ url, ...otherProps }) => {
    if (url) {
      return <Link to={url}><Component {...otherProps} /></Link>
    }
    return <Component {...otherProps} />
  }
}

export default withLink(Button)
