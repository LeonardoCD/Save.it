import { Button, Form, Input, Row } from "../../../../components";

export function FormCreateContact() {
  return (
    <Form>
      <h1>Criar Novo Contato</h1>
      <fieldset>
        <legend>Dados</legend>
        <Input name="name" type="text" label="Nome" id="name" />
        <Input name="lastName" type="text" label="Sobrenome" id="lastName" />
        <Input
          name="surName"
          type="text"
          label="Apelido"
          id="surName"
          width="20rem"
        />
      </fieldset>

      <fieldset>
        <legend>Contato</legend>
        <Row style={{ justifyContent: "space-between" }}>
          <Input
            name="telephone"
            type="text"
            label="Telefone"
            id="telephone"
            width="18rem"
          />
          <Input
            name="telephone2"
            type="text"
            label="Telefone(2)"
            id="telephone2"
            width="18rem"
          />
        </Row>
        <Input name="email" type="email" label="E-mail" id="email" />
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        <Row
          style={{ justifyContent: "space-between", alignItems: "flex-end" }}
        >
          <Input name="cep" type="text" label="Cep" id="cep" width="26rem" />
          <Button
            text="Buscar Cep"
            color="var(--white)"
            background="var(--blue-700)"
          />
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Input
            name="logradouro"
            type="text"
            label="Logradouro"
            id="logradouro"
            width="18rem"
          />
          <Input
            name="number"
            type="text"
            label="Número"
            id="number"
            width="18rem"
          />
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Input
            name="locale"
            type="text"
            label="Localidade"
            id="locale"
            width="18rem"
          />
          <Input name="uf" type="text" label="UF" id="uf" width="18rem" />
        </Row>
      </fieldset>

      <fieldset>
        <legend>Agrupamento</legend>
        <Input name="tag" type="text" label="Marcador" id="tag" />
      </fieldset>

      <Button
        text="CADASTRAR CONTATO"
        color="var(--white)"
        background="var(--blue-700)"
        width="100%"
      />
    </Form>
  );
}
