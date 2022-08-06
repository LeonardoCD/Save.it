import { ButtonWrapper } from "./style";

interface ButtonProps {
  text: string;
  color: string;
  background: string;
  onClick?: () => void;
}

export function Button({ color, background, onClick, text }: ButtonProps) {
  return (
    <ButtonWrapper color={color} background={background} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
}
