'use client';

import React from 'react';
import styled from 'styled-components';
import { FaSpotify } from 'react-icons/fa';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #121212;
  font-size: 2rem;

  & span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <FaSpotify /> <span>Bludify</span>
    </StyledHeader>
  );
};

export default Header;
