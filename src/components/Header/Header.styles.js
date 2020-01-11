import styled from 'styled-components'
import SVG from 'react-inlinesvg';


export const Header = styled.header`
  margin: 0 auto;

  @media (min-width: 48em) {
    margin: 0 auto 4em;
  }
`

export const Logo = styled(SVG)`
  width: 100%;
  max-width: 40px;

  @media (min-width: 48em) {
    max-width: ${props => props.size === 'large' ? "10em" : "5em"};
  }

`