import React from 'react'
import { Button } from './Button.styles'

export default ({ displayText, type }) => {
  const primary = type && type.toLowerCase() === 'primary';
  return (
    <Button primary={primary}>{displayText}</Button>
  )
}
