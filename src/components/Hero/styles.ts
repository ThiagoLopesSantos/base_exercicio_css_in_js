import styled from 'styled-components'
import { Theme } from '../../themes/standard'

export const HeroForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }

  &::before {
    background-color: ${(props) => (props.theme as Theme).primary};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.7;
  }
`

export const HeroContainer = styled.div`
  position: relative;
  color: ${(props) => (props.theme as Theme).secondary};
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  padding: 0 24px;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
