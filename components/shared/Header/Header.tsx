'use client';

import React from 'react';
import styled from 'styled-components';
import { FaSpotify } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #121212;
  font-size: 2rem;
  cursor: pointer;

  & span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader onClick={() => router.push('/')}>
      <FaSpotify /> <span>Bludify</span>
    </StyledHeader>
  );
};

export default Header;
