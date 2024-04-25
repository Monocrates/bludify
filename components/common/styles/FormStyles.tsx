'use client';

import { Form, FormField, Label } from '@radix-ui/react-form';
import { TextField } from '@radix-ui/themes';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 0;

  @media (min-width: 767px) {
    width: 324px;
  }
`;

export const StyleFormField = styled(FormField)`
  padding-bottom: 1rem;
`;

export const StyleLabel = styled(Label)`
  font-weight: bold;
  font-size: 0.825rem;
`;

export const StyleTextField = styled(TextField.Root)<{ $error?: boolean }>`
  outline: ${(props) => (props.$error ? '1px solid red' : null)};
`;

export const StyledError = styled.div`
  display: flex;
  margin-block-start: 8px;
`;

export const ErrorIcon = styled(AiOutlineExclamationCircle)`
  width: 1rem;
  height: 1.25rem;
  block-size: 1.25rem;
  color: #f15e6c;
`;

export const ErrorMessage = styled.span`
  font-size: 0.875rem;
  display: inline;
  overflow-wrap: break-word;
`;

export const FormSeparator = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 1rem 0 2rem 0;

  &:before {
    content: ' ';
    height: 1px;
    background-color: #878787;
    display: block;
    position: absolute;
    top: 50%;
    left: 0px;
    right: 0px;
  }

  & span {
    padding: 0px 12px;
    position: relative;
    display: inline-block;
    background: #121212;
    font-size: 0.875rem;
  }
`;
