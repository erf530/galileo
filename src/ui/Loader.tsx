import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`;

const StyledLoader = styled.div`
  display: flex;
  align-self: center;
  justify-center: center;
  margin: 8rem auto;
  align-self: center;
  border: 1rem solid #f3f3f3;
  border-top: 1rem solid #2f60a0;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  animation: ${spin} 2s linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Loader = () => <StyledLoader />;
