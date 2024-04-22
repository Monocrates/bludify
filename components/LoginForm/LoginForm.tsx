'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-form';
import { Box, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { createUser } from '@/lib/actions';
import Button from '../common/Button';
import { ErrorIcon, ErrorMessage, StyleFormField, StyleTextField, StyledError, StyledForm } from './styles/FormStyles';

const schema = z.object({
  email: z.string().email().min(1, 'Enter a valid email'),
  password: z.string().min(7, 'Enter the correct password'),
});

type LoginFormFields = z.infer<typeof schema>;

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<LoginFormFields> = async (data, event) => {
    event?.preventDefault();

    const { email, password } = data;

    if (isLogin) {
      // Logged user
    } else {
      try {
        const result = await createUser(email, password);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyleFormField name="email">
        <Flex pb="2">
          <Label htmlFor="email-input">Email</Label>
        </Flex>
        <StyleTextField type="email" id="email-input" $error={!!errors.email} {...register('email')} />
        {errors.email && (
          <StyledError>
            <ErrorIcon style={{ marginInlineEnd: '4px' }} />
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          </StyledError>
        )}
      </StyleFormField>
      <StyleFormField name="password">
        <Flex pb="2">
          <Label htmlFor="password-input">Password</Label>
        </Flex>
        <StyleTextField type="password" id="password-input" $error={!!errors.password} {...register('password')} />
        {errors.password && (
          <StyledError>
            <ErrorIcon style={{ marginInlineEnd: '4px' }} />
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          </StyledError>
        )}
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
