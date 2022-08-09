import { ContactName, ContactNameWrapper, ItemWrapper } from "./styles";
import { Avatar } from "@chakra-ui/avatar";
import {  OutlineButton, Row } from "..";
import { IContact } from "../../shared/interfaces";
import { fullName } from "../../shared/utils";

interface ContactItemProps {
  contact: IContact;
  onClickContact: () => void;
  onClickDelete: () => void;
}

export function ContactItem({
  contact,
  onClickContact,
  onClickDelete,
}: ContactItemProps) {
  const name = fullName(contact.name, contact.lastName);

  return (
    <ItemWrapper>
      <ContactNameWrapper onClick={onClickContact}>
        <Avatar name={name} />
        <ContactName>{name}</ContactName>
      </ContactNameWrapper>
      <Row style={{ gap: "1rem" }}>
        <OutlineButton color="var(--gray-600)" text="Editar" />
        <OutlineButton
          color="var(--red-900)"
          text="Excluir"
          onClick={onClickDelete}
        />
      </Row>
    </ItemWrapper>
  );
}
