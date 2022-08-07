import { ButtonWrapper } from "./style";

interface ButtonProps {
  text: string;
  color: string;
  background: string;
  onClick?: () => void;
  width?: string;
}

export function Button({
  color,
  background,
  onClick,
  text,
  width,
}: ButtonProps) {
  return (
    <ButtonWrapper
      color={color}
      background={background}
      onClick={onClick}
      width={width}
    >
      {text}
    </ButtonWrapper>
  );
}
