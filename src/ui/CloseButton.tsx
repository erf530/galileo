import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  position: absolute;
  background-color: white;
  border: transparent;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: black;
  opacity: 1;
  transition: all ease-in-out 0.2s;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
  &:hover {
    opacity: 0.5;
  }
`;

type Props = {
  onClick: () => void;
  label: string;
};

export const CloseButton = ({ onClick, label }: Props) => (
  <ButtonContainer type="button" aria-label={label} onClick={onClick}>
    {/* x symbol in unicode */}
    <span aria-hidden>&#x2715;</span>
  </ButtonContainer>
);
