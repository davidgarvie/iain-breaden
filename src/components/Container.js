import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const Container = styled(BackgroundImage)`
  width: 100%;
  padding: 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Background = ({ children, hero }) => {
  return (
    <Container
      Tag="div"
      fluid={hero.fluid}
      backgroundColor="#2bf5c6"
      >
      {children}
    </Container>
  )
}

export default Background