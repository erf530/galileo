import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  text-align: center;
  min-height: 6rem;
  width: 16rem;
  margin: 1rem;
  padding: 1rem 0;
  box-shadow: 0 2px 1.5rem rgba(15, 20, 48, 0.1);
  border-radius: 25px;
  transition: all ease-in-out 1s;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:hover {
    box-shadow: 0 2px 1.5rem rgba(15, 20, 48, 0.2);
  }
`;

export const Card = ({ children }: any) => <CardStyled>{children}</CardStyled>;
