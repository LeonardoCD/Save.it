import {
  Row,
  Button,
  InputSearch,
  ContactItem,
  ShowContactModal,
} from "../../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IContact } from "../../shared/interfaces";
import { getContactList } from "../../redux/slices/contactList";
import { setActiveContact } from "../../redux/slices/activeContact";
import { ContactList, Header, HeaderSearch } from "./styles";
import Logo from "../../assets/logo.svg";
import { fullName } from "../../shared/utils";

export function Home() {
  const listTitle = "Lista geral de contatos";
  const contactList = useSelector(getContactList);
  const [isShowContactOpen, setIsShowContactOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState<IContact[]>([]);
  const [filteredList, setFilteredList] = useState<IContact[]>(contactList);

  useEffect(() => {
    if (inputSearch === "") {
      setFilterSearch([]);
      setFilteredList(contactList);
    }
  }, [inputSearch]);

  // executa toda vez que o usuário digita
  function onChangeInputValue(value: string) {
    setInputSearch(value);

    const newFilter = newFilteredList(value);

    setFilterSearch(newFilter);
    setFilteredList(newFilter);
  }

  // executa quando o usuário auto-completa o nome do contato
  function handleAutoComplete(value: string) {
    setInputSearch(value);
    setFilterSearch([]);

    const newFilter = newFilteredList(value);
    setFilteredList(newFilter);
  }

  // gera uma nova lista de contatos filtrados
  function newFilteredList(value: string) {
    return contactList.filter((contact) => {
      const name = fullName(contact.name, contact.lastName);
      return name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
  }

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
            onClick={() => navigate("create-contact")}
          />
        </Row>
      </Header>

      <HeaderSearch>
        <InputSearch
          inputValue={inputSearch}
          setInputValue={setInputSearch}
          filterSearch={filterSearch}
          onChange={(event) => {
            const { value } = event.target;
            onChangeInputValue(value);
          }}
          onSelectItem={handleAutoComplete}
        />
        <Button
          color="var(--primary)"
          background="var(--white)"
          text="Ver Marcadores"
        />
      </HeaderSearch>

      <ContactList>
        <h2>{listTitle}</h2>
        {filteredList.map((contact: IContact) => {
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
