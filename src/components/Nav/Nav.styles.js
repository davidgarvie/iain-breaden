import styled from 'styled-components'

export const StyledList = styled.ul`
  display: none;
  font-size: 1.2rem;
  justify-content: center;
  list-style: none;
  margin: 0 auto 2em;
  max-width: 32em;

  li {
    padding: 0 1em;
    text-align: center;
  }

  @media (min-width: 48em) {
    display: flex;
    font-size: 1.5rem;
  }
`

export const StyledNav = styled.nav`
  margin-top: auto;
`
