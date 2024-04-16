import { Box, Heading } from '@radix-ui/themes';
import { FC, PropsWithChildren } from 'react';

const LoginUser: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box style={{ borderRadius: '10px', background: '#121212' }} py="3" maxWidth={{ xs: '100%', sm: '734px' }} width="100%">
      <Heading as="h1" size='9' style={{ margin: '2rem 0' }} align='center'>
        Login to Bludify
      </Heading>
      {children}
    </Box>
  );
};

export default LoginUser;
