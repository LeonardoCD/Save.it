import { ButtonWrapper } from "./style";

interface ButtonProps {
  text: string;
  color: string;
  background: string;
  onClick?: () => void;
  width?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  color,
  background,
  onClick,
  text,
  width,
  type,
}: ButtonProps) {
  return (
    <ButtonWrapper
      color={color}
      background={background}
      onClick={onClick}
      width={width}
      type={type}
    >
      {text}
    </ButtonWrapper>
  );
}
