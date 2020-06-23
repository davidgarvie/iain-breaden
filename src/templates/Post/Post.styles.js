import Image from 'gatsby-image';
import Styled from 'styled-components';

export const Container = Styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`

export const Content = Styled.div`
  blockquote {
    border-left: 4px solid #cccccc;
    padding-left: 1.5rem;
    font-style: italic;
    font-weight: 200;
  }

  a {
    text-decoration: underline;
  }
`

export const StyledImage = Styled(Image)`
  margin-top: 2em;
`

export const SubHeading = Styled.p`
  color: #718096;
`
