import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.primary ? "#00fbbd" : "transparent"};
  width: 100%;
  border: 2px solid #fff;
  color: inherit;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.2em 0.8em;
  border-radius: 20px;
`

export default ({ url, displayText, type }) => {
  const buttonType = type && type.toLowerCase();
  const primary = type && type.toLowerCase() === 'primary';
  return (
    <Button primary={primary}>{displayText}</Button>
  )
}
