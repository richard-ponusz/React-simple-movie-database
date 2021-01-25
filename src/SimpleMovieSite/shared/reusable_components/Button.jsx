import React from 'react';
import styled from '@emotion/styled';

const ButtonStyle = styled.button`
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	border-radius: 3px;
	cursor: pointer;
	transition: transform 0.3s ease;
	margin: 5px;
  padding: 0.8rem 2.3rem;
  border-radius: 0.5rem;
  text-shadow: 1px;
  color: ${props => {
    switch (props.variant) {
      case 'primary':
        return '#fff'
      case 'success':
        return '#fff'
      case 'warning':
        return '#fff'
      case 'danger':
        return '#fff'
      case 'dark':
        return '#fff'
      default:
        return 'black'
    }
  }};
  background-color: ${props => {
    switch (props.variant) {
      case 'primary':
        return '#337ab7'
      case 'success':
        return '#40B640'
      case 'warning':
        return '#f0ad4e'
      case 'danger':
        return '#D93636'
      case 'dark':
        return '#2c3e50'
      default:
        return '#fff'
    }
  }};
  &:hover {
    transition: 0.25s;
    background-color: ${props => {
    switch (props.variant) {
      case 'primary':
        return '#286090'
      case 'success':
        return '#215E21'
      case 'warning':
        return '#ec971f'
      case 'danger':
        return '#8B1A1A'
      case 'dark':
        return '#2c3e50'
      default:
        return '#fff'
    }
  }};
  }
`

const Button = ({ label = 'Button', onClick, variant = 'default', disabled = false }) => {

  return (
    <ButtonStyle
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      {label}
    </ButtonStyle>
  )
}

export default Button;
