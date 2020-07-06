import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  margin: 1rem;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  font-family: Avenir, sans-serif;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const PrimaryButton = styled(Button)`
  font-size: 16px;
  height: 3rem;
  width: 9rem;
  border: #ffd040;
  background-color: #ffd040;
  color: #0f1430;
  &:hover {
    border-color: #ffeabf;
    background: #ffeabf;
    box-shadow: 0 2px 1.5rem rgba(15, 20, 48, 0.2);
  }
`;

export const SecondaryButton = styled(Button)`
  font-size: 12px;
  height: 2rem;
  width: 5rem;
  border-color: #2f60a0;
  background-color: #2f60a0;
  color: #0f1430;
  color: white;
  &:hover {
    color: black;
    border-color: #97afcf;
    background: #97afcf;
  }
`;
