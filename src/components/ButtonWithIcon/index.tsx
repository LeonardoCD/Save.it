import { ButtonWrapper } from "./styles";

interface ButtonWithIconProps {
  onClick?: () => void;
  text: string;
  icon: string;
}

export function ButtonWithIcon({onClick, text, icon} : ButtonWithIconProps) {
  return (
    <ButtonWrapper onClick={onClick}>
      <img src={icon} alt="icon" />
      {text}
    </ButtonWrapper>
  );
}