import { ButtonIconWrapper } from "./styles";

interface ButtonIconProps {
  onClick?: () => void;
  img: string;
}

export function ButtonIcon({ onClick , img}: ButtonIconProps) {

  return (
    <ButtonIconWrapper onClick={onClick}>
      <img src={img} alt="icon" />
    </ButtonIconWrapper>
  );
}