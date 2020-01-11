import Styled from 'styled-components';

export const Aside = Styled.aside`
  min-width: 20em;
`

export const Container = Styled.div`

  @media (min-width: 48em) {
    display: flex;
    padding: 4em;
  }
`

export const Section = Styled.section`
  > * + * {
    margin-top: 1em;
  }
`