import { Form, FormField } from '@radix-ui/react-form';
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
