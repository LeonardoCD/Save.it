import { HeaderWrapper } from "./styles";
import Logo from "../../assets/logo.svg";
import { ButtonWithIcon } from "..";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/arrow-left.svg";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <img src={Logo} alt="logo" />
      <ButtonWithIcon
        icon={ArrowLeft}
        text="Voltar"
        onClick={() => navigate("/")}
      />
    </HeaderWrapper>
  );
}
