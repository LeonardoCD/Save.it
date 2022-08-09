import { ButtonWithIcon } from "../../components";
import { useNavigate } from "../../shared/hooks";
import ArrowLeft from "../../assets/arrow-left.svg";
import { NotFoundWrapper } from "./styles";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <h1>404 Página não encontrada!</h1>
      <ButtonWithIcon
        text="Voltar para Home"
        icon={ArrowLeft}
        onClick={() => navigate("/")}
      />
    </NotFoundWrapper>
  );
}
