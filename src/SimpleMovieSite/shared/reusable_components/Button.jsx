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
      case 'white':
        return 'black'
      case 'dark':
        return '#fff'
    }
  }};
  background-color: ${props => {
    switch (props.variant) {
      case 'primary':
        return '#3498db'
      case 'success':
        return '#27ae60'
      case 'warning':
        return '#f1c40f'
      case 'danger':
        return '#e74c3c'
      case 'white':
        return '#fff'
      case 'dark':
        return '#2c3e50'
    }
  }};
  &:hover {
    transition: 0.25s;
    background-color: ${props => {
    switch (props.variant) {
      case 'primary':
        return 'darkblue'
      case 'success':
        return '#27ae60'
      case 'warning':
        return '#f1c40f'
      case 'danger':
        return '#e74c3c'
      case 'white':
        return '#fff'
      case 'dark':
        return '#2c3e50'
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
