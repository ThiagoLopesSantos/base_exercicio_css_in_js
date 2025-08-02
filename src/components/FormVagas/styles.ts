import styled from 'styled-components'
import { Theme } from '../../themes/standard'
import React from 'react'

export const FormContainer = styled.form<
  React.FormHTMLAttributes<HTMLFormElement>
>`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  background-color: ${(props) => (props.theme as Theme).secondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Search = styled.input.attrs({
  type: 'search',
  placeholder: 'Front-end, fullstack, node, design'
})<React.InputHTMLAttributes<HTMLInputElement>>`
  padding: 0 16px;
  outline-color: ${(props) => (props.theme as Theme).primary};

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
    grid-column: 1 / -1;
    text-align: center;
  }
`

export const BtnSearch = styled.button<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: ${(props) => (props.theme as Theme).primary};
  border: 1px solid ${(props) => (props.theme as Theme).primary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => (props.theme as Theme).secondary};
  cursor: pointer;
`
