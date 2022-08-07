import { Row, Button, InputSearch, ContactItem } from "../../components";
import { useSelector } from "react-redux";
import { getContactList } from "../../redux/slices/contactList";
import { IContact } from "../../shared/interfaces";
import { ContactList, Header, HeaderSearch } from "./styles";
import Logo from "../../assets/logo.svg";

export function Home() {
  const listTitle = "Lista geral de contatos";
  const contactList = useSelector(getContactList);

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
