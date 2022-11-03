import React, { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isDisabled = false,
  onClick,
  children,
  ...props
}) => {
  return (
    <ButtonContainer disabled={isDisabled} {...props} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export { Button };
