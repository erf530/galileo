import React from 'react';
import styled from 'styled-components';

type SearchInputProps = {
  searchValue: string;
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledLabel = styled.label`
  font-family: Avenir;
  font-weight: bold;
  display: inline-block;
  width: 100%;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
`;
const StyledInput = styled.input`
  font-family: Avenir;
  width: 400px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  padding: 1rem;
`;

export const SearchInput = ({
  onChange,
  searchValue,
  placeholder,
  label,
}: SearchInputProps) => {
  return (
    <form role="search">
      <StyledLabel html-for="search">{label}</StyledLabel>
      <StyledInput
        type="search"
        id="search"
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
        value={searchValue}
      />
    </form>
  );
};
