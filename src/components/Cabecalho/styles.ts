import styled from 'styled-components'
import { Theme } from '../../themes/standard'

export const HeaderContainer = styled.header`
  background-color: ${(props) => (props.theme as Theme).secondary};
  color: ${(props) => (props.theme as Theme).primary};
  text-align: center;
  padding: 24px 0;
`
