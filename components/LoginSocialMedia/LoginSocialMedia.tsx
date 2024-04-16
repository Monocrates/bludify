'use client';

import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Button from '../common/Button';

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: normal;
  margin: 0 auto;

  @media (min-width: 767px) {
    width: 324px;
  }
`;

const LoginSocialMedia = () => {
  return (
    <ButtonsContainer>
      <Button buttonType="primary" type="button" style={{ marginBottom: '1rem' }}>
        <Button.Icon>
          <FaGoogle />
        </Button.Icon>
        <Button.Label>Continue with Google</Button.Label>
      </Button>
      <Button buttonType="primary" type="button" style={{ marginBottom: '1rem' }}>
        <Button.Icon>
          <FaFacebook />
        </Button.Icon>
        <Button.Label>Continue with Facebook</Button.Label>
      </Button>
    </ButtonsContainer>
  );
};

export default LoginSocialMedia;
