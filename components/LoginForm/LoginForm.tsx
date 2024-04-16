'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, Label } from '@radix-ui/react-form';
import { Box, Flex, TextField } from '@radix-ui/themes';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '../common/Button';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0;

  @media (min-width: 767px) {
    width: 324px;
  }
`;

const StyleFormField = styled(FormField)`
  padding-bottom: 1rem;
`;

const schema = z.object({
  email: z.string().email().min(1, 'Enter a valid email'),
  password: z.string().min(7, 'Enter the correct password'),
});

type LoginFormFields = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyleFormField name="email">
        <Flex pb="2">
          <Label>Email</Label>
        </Flex>
        <TextField.Root type="email" {...register('email')} />
        {errors.email && <div>{errors.email.message}</div>}
      </StyleFormField>
      <StyleFormField name="password">
        <Flex pb="2">
          <Label>Password</Label>
        </Flex>
        <TextField.Root type="password" {...register('password')} />
        {errors.password && <div>{errors.password.message}</div>}
      </StyleFormField>
      <Box py="5">
        <Button buttonType="secondary" type="submit">
          <Button.Label>{isSubmitting ? 'Logging...' : 'Log In'}</Button.Label>
        </Button>
      </Box>
    </StyledForm>
  );
};

export default LoginForm;
