import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.primary ? "#00fbbd" : "transparent"};
  width: 100%;
  border: ${props => props.primary ? "none" : "3px solid rgba(255, 255, 255)"};
  color: inherit;
  font-size: ${props => props.primary ? "1.7rem" : "1.5rem"};
  font-weight: 600;
  padding: 0.4em 0.8em;
  border-radius: 20px;
  cursor: pointer;
`

export default ({ url, displayText, type }) => {
  const buttonType = type && type.toLowerCase();
  const primary = type && type.toLowerCase() === 'primary';
  return (
    <Button primary={primary}>{displayText}</Button>
  )
}
