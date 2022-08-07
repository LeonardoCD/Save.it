import { OutlineButtonWrapper } from "./styles";

interface OutlineButtonProps {
  color: string;
  text: string;
  onClick?: () => void;
  padding?: string;
}

export function OutlineButton({
  color,
  text,
  onClick,
  padding,
}: OutlineButtonProps) {
  return (
    <OutlineButtonWrapper color={color} onClick={onClick} padding={padding}>
      {text}
    </OutlineButtonWrapper>
  );
}
