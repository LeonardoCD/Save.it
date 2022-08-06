import { OutlineButtonWrapper } from "./styles";

interface OutlineButtonProps {
  color: string;
  text: string;
  onClick?: () => void;
}

export function OutlineButton({ color, text, onClick }: OutlineButtonProps) {
  return (
    <OutlineButtonWrapper color={color} onClick={onClick}>
      {text}
    </OutlineButtonWrapper>
  );
}
