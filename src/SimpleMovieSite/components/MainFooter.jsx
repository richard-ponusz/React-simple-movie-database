import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #34495e;
  color: #fff;
  padding: 1rem;
  border-color: red;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
`

const Footer = () => {
  return (
    <Container>
      <span>** This is the footer text **</span>
    </Container>
  )

}

export default Footer;
