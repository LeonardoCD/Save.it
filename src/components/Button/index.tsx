import { ButtonWrapper } from "./style";

interface ButtonProps {
  text: string;
  color: string;
  background: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  color,
  background,
  onClick,
  text,
  width,
  height,
  type,
}: ButtonProps) {
  return (
    <ButtonWrapper
      color={color}
      background={background}
      onClick={onClick}
      width={width}
      height={height}
      type={type}
    >
      {text}
    </ButtonWrapper>
  );
}
