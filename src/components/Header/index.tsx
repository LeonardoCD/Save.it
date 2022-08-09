import { ButtonWithIcon } from "..";
import Logo from "../../assets/logo.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import { HeaderWrapper } from "./styles";
import { useNavigate } from "../../shared/hooks";

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
