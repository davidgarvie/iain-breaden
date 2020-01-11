import Image from 'gatsby-image'
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em 0;

  > * {
    width: 100%;
    flex: 1 0 320px;
  }
`

export const StyledImage = styled(Image)`
  @media (min-width: 768px) {
    margin-right: 3em;
  }
`