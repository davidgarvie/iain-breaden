import Styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 72em;
  padding: 1em;
  min-height: 100vh;
`

export const Hero = Styled(BackgroundImage)`
  min-height: 100vh;

  > div {
    justify-content: space-between;
  }

  nav {
    margin: unset;
  }

`