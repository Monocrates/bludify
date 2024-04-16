import React from 'react';

import LoginUser from '@/components/LoginUser/LoginUser';
import { Box, Flex, Separator } from '@radix-ui/themes';
import LoginSocialMedia from '@/components/LoginSocialMedia/LoginSocialMedia';
import LoginForm from '@/components/LoginForm/LoginForm';

const Login = () => {
  return (
    <Flex
      justify="center"
      style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%)' }}
      p={{ xs: '0', sm: '0', md: '7' }}
    >
      <LoginUser>
        <LoginSocialMedia />
        <Box mx={{ xs: '2', sm: '9' }} my="5">
          <Separator size="4" />
        </Box>
        <LoginForm />
      </LoginUser>
    </Flex>
  );
};

export default Login;
