import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: auto;
`

const ImgContainer = styled.div`
  margin: 0 auto;
  max-width: 10em;
`

export default ({ url }) => (
  <ImgContainer>
    <Img src={url} />
  </ImgContainer>
)
