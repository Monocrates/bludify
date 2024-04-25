'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Flex, Switch, Text } from '@radix-ui/themes';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { createUser } from '@/lib/actions';
import Button from '../../common/Button';
import {
  ErrorIcon,
  ErrorMessage,
  StyleFormField,
  StyleLabel,
  StyleTextField,
  StyledError,
  StyledForm,
} from '../../common/styles/FormStyles';

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
          <StyleLabel htmlFor="email-input">Email</StyleLabel>
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
          <StyleLabel htmlFor="password-input">Password</StyleLabel>
        </Flex>
        <StyleTextField type="password" id="password-input" $error={!!errors.password} {...register('password')} />
        {errors.password && (
          <StyledError>
            <ErrorIcon style={{ marginInlineEnd: '4px' }} />
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          </StyledError>
        )}
      </StyleFormField>

      <Flex gap="2" align="center" mt="2">
        <Switch size="1" color="green" />
        <Text as="label" size="1">
          Remember me
        </Text>
      </Flex>
      <Box py="5">
        <Button buttonType="secondary" type="submit">
          <Button.Label>{isSubmitting ? 'Logging...' : 'Log In'}</Button.Label>
        </Button>
      </Box>
    </StyledForm>
  );
};

export default LoginForm;
