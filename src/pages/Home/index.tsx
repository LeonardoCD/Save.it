import { Row, Button, InputSearch } from "../../components";
import { Header, HeaderSearch } from "./styles";
import Logo from "../../assets/logo.svg";

export function Home() {
  return (
    <>
      <Header>
        <Row style={{ justifyContent: "space-between", width: "100%" }}>
          <img src={Logo} alt="logo" />
          <Button
            color="var(--white)"
            background="var(--blue-900)"
            text="Criar contato"
          />
        </Row>
      </Header>
      
      <HeaderSearch>
        <InputSearch />
        <Button
          color="var(--primary)"
          background="var(--white)"
          text="Ver Marcadores"
        />
      </HeaderSearch>
    </>
  );
}
