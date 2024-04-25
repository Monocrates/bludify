import { Box, Heading } from '@radix-ui/themes';
import React, { FC, PropsWithChildren } from 'react';

const SignUpContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box style={{ borderRadius: '10px' }} py="3" maxWidth={{ xs: '100%', sm: '734px' }} width="100%">
      <Heading as="h1" size="9" style={{ margin: '2rem 0' }} align="center">
        Sign up to start listening Bludify
      </Heading>
      {children}
    </Box>
  );
};

export default SignUpContainer;
