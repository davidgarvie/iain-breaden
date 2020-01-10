import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  width: 100%;
  border: 2px solid #fff;
  color: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.2em 0.8em;
  border-radius: 20px;
`

export default ({ children }) => (
  <Button>{children}</Button>
)
