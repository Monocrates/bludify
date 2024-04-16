import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'primary' | 'secondary' | 'default';
}

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-block-size: 48px;
`;

const DefaultButton = styled(StyledButton)`
  background-color: #d3d3d3;
  color: black;
`;

const PrimaryButton = styled(StyledButton)`
  background-color: #121212;
  border: 1px solid white;

  &:hover {
    outline: 1px solid white;
  }
`;

const SecondaryButton = styled(StyledButton)`
  background-color: #1ed760;
  border: 0;
  color: black;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const ButtonLabel = styled.span`
  display: flex;
  margin: auto;
`;

const ButtonIcon = styled.span`
  margin: 0;
`

const Button = ({ buttonType, children, ...props }: ButtonProps) => {
  console.log('render button component');

  if (buttonType === 'primary') {
    return <PrimaryButton {...props}>{children}</PrimaryButton>;
  }

  if (buttonType === 'secondary') {
    return <SecondaryButton {...props}>{children}</SecondaryButton>;
  }

  return <DefaultButton {...props} />;
};

Button.Icon = ButtonIcon;
Button.Label = ButtonLabel;

export default Button;
