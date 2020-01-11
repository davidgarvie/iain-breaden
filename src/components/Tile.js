import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const Tile = styled.section`
  background: #00FBBD;
  text-align: center;
  padding: 0.5em;
  width: 100%;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 auto;
`

const Content = styled.div`
  max-width: 30em;
  margin: 0 auto;
  font-size: 1.4rem;
  font-weight: 400;
`

const ButtonContainer = styled.div`
  max-width: 10em;
  margin: 0 auto;
`

export default ({ cta, content, title }) => {
  const { childMarkdownRemark: { html } } =  content;
  return (
    <Tile>
      <Title>{title}</Title>
      <Content dangerouslySetInnerHTML={{__html: html }} />
      <ButtonContainer>
        <Button {...cta} />
      </ButtonContainer>
    </Tile>
  )
}
