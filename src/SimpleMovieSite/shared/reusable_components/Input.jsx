import React from 'react';
import styled from '@emotion/styled';

const InputField = styled.input`
  margin: 1rem;
  padding: 0.8rem 1rem;
  width: 20rem;
  border-radius: 0.5rem;
  box-shadow: none;
`

const Input = ({ value, onChange }) => {
  return (
    <InputField
      placeholder="Type here to search for movies..."
      value={value}
      onChange={onChange}
    />
  )
}

export default Input;
