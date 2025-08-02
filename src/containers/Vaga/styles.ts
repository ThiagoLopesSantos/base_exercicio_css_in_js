import styled from 'styled-components'
import { Theme } from '../../themes/standard'

export const VagaContainer = styled.li`
  border: 1px solid ${(props) => (props.theme as Theme).primary};
  background-color: ${(props) => (props.theme as Theme).secondary};
  color: ${(props) => (props.theme as Theme).primary};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => (props.theme as Theme).primary};
    color: ${(props) => (props.theme as Theme).secondary};
  }
`
export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  border-color: ${(props) => (props.theme as Theme).secondary};
  background-color: ${(props) => (props.theme as Theme).primary};
  color: ${(props) => (props.theme as Theme).secondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: ${(props) => (props.theme as Theme).primary};
    background-color: ${(props) => (props.theme as Theme).secondary};
    color: ${(props) => (props.theme as Theme).primary};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
