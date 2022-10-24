import React, { FC } from "react";
import { StyledButton } from "./Button.styles";
import { ProdutsItem } from "../../types/types";

interface ButtonProps {
  buttonText: string;
  product: ProdutsItem;
  onClick: (item: ProdutsItem) => void;
}

const Button: FC<ButtonProps> = ({ buttonText, product, onClick }) => {
  return (
    <StyledButton onClick={() => onClick(product)}>{buttonText}</StyledButton>
  );
};

export { Button };
