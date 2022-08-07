import {
  Row,
  Button,
  InputSearch,
  ContactItem,
  ShowContactModal,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getContactList } from "../../redux/slices/contactList";
import { IContact } from "../../shared/interfaces";
import { ContactList, Header, HeaderSearch } from "./styles";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { setActiveContact } from "../../redux/slices/activeContact";

export function Home() {
  const listTitle = "Lista geral de contatos";
  const contactList = useSelector(getContactList);
  const [isShowContactOpen, setIsShowContactOpen] = useState(false);
  const dispatch = useDispatch();

  function handleCloseContactModal() {
    setIsShowContactOpen(false);
  }

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
          return (
            <ContactItem
              key={contact.name}
              contact={contact}
              onClick={() => {
                dispatch(setActiveContact(contact));
                setIsShowContactOpen(true);
              }}
            />
          );
        })}
      </ContactList>
      <ShowContactModal
        isOpen={isShowContactOpen}
        onRequestClose={handleCloseContactModal}
      />
    </>
  );
}
