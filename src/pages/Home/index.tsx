import { Row, Button, InputSearch, ContactItem } from "../../components";
import { ContactList, Header, HeaderSearch } from "./styles";
import Logo from "../../assets/logo.svg";
import { IContact } from "../../shared/interfaces";

export const contactList: IContact[] = [
  {
    name: "João",
    lastName: "Silva",
    surname: "Santos",
    telephone: ["+55 (11) 99999-9999"],
    email: "leonardofelipe931@gmal.com",
    address: [
      {
        cep: "01001-000",
        street: "Rua dos Bobos",
        number: "0",
        neighborhood: "Bairro dos Bobos",
        complement: "",
        city: "São Paulo",
        state: "SP"
      }
    ],
    tag: "",
  },
  {
    name: "Leonardo",
    surname: "Leo",
    telephone: ["(95) 99171-8840"],
    email: "leonardofelipe931@gmal.com",
    address: [
      {
        cep: "69314-338",
        street: "Rua dos Bobos",
        number: "0",
        neighborhood: "Bairro dos Bobos",
        complement: "",
        city: "Boa Vista",
        state: "RR"
      }
    ],
    tag: "",
  }
];

export function Home() {

  const listTitle = 'Lista geral de contatos';

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

      <ContactList>
        <h2>{listTitle}</h2>
        {contactList.map((contact: IContact) => {
          return <ContactItem key={contact.name} contact={contact} />;
        })}
      </ContactList>
    </>
  );
}
