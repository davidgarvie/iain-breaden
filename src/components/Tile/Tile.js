import React from 'react'
import Button from '../Button/Button';
import { Tile, Title, Content, ButtonContainer } from './Tile.styles';

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
