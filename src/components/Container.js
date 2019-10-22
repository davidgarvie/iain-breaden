import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-image: ${props => `url(${props.url});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 100%;
  padding: 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default ({ children, url }) => (
  <Container url={url}>
    {children}
  </Container>
)
