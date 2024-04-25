import { Flex } from '@radix-ui/themes';
import React from 'react';

import LoginSocialMedia from '@/components/Login/LoginSocialMedia/LoginSocialMedia';
import SingUpForm from '@/components/SingUp/SignUpForm/SingUpForm';
import SignUpContainer from '@/components/SingUp/SignUpContainer/SignUpContainer';
import { FormSeparator } from '@/components/common/styles/FormStyles';

const page = () => {
  return (
    <Flex justify="center" p={{ xs: '0', sm: '0', md: '7' }}>
      <SignUpContainer>
        <SingUpForm />
        <FormSeparator>
          <span>or</span>
        </FormSeparator>
        <LoginSocialMedia />
      </SignUpContainer>
    </Flex>
  );
};

export default page;
