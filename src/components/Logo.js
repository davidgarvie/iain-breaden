import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: auto;
`

const ImgContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 10em;
`

export default ({ className, url }) => (
  <ImgContainer className={className}>
    <Img src={url} />
  </ImgContainer>
)
