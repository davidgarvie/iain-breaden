import Styled from 'styled-components';
import { Link } from 'gatsby'

export const ListItem = Styled.li`
  display: flex;
`

export const StyledLink = Styled(Link)`
  background: #00fbbd;
  font-size: 2rem;
  text-align: center;
  cursor: pointer;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  word-break: break-all;
`;
