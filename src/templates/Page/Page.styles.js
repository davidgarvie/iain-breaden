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

export const Section = styled.section`
@media (min-width: 768px) {
  :first-child {
    display: flex;

    > :first-child {
      flex-shrink: 0;
      margin-right: 2em;
    }
  }
}
`

export const Links = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > * {
    width: 100%;
    margin-bottom: 1em;

    &:last-of-type:nth-child(odd) {
      flex-grow: 1;
    }
  }

  
  @media (min-width: 48em) {
    > * {
      width: calc(50% - 0.5em);
    }
  }
`