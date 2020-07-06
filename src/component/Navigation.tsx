import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import avatar from '../assets/avatar.png';

const Avatar = styled.img`
  display: inline-block;
  position: absolute;
  margin: 1rem;
  right: 0;
  top: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
`;

const Logo = styled.img`
  display: inline-block;
  width: 200px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  color: white;
  background-color: transparent;
  background-color: #0f1430;
`;

const NavLink = styled.a`
  margin: 8px 16px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Navigation = () => (
  <StyledNav>
    {/* Would be actual links to main page, user profile */}
    <NavLink href="/">
      <Logo src={logo} alt="logo" />
    </NavLink>
    <NavLink href="/">
      <Avatar src={avatar} alt="avatar" />
    </NavLink>
  </StyledNav>
);
