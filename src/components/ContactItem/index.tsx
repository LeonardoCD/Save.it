import { ContactName, ItemWrapper } from "./styles";
import { Avatar } from "@chakra-ui/avatar";
import { OutlineButton, Row, ShowContactModal } from "..";
import { IContact } from "../../shared/interfaces";
import { useState } from "react";

interface ContactItemProps {
  contact: IContact;
}

export function ContactItem({ contact }: ContactItemProps) {
  const [isShowContactOpen, setIsShowContactOpen] = useState(false);
  let completeName = "";
  if (contact.lastName) {
    completeName = `${contact.name} ${contact.lastName}`;
  } else {
    completeName = contact.name;
  }

  function handleCloseContactModal() {
    console.log("handleCloseContactModal");
    setIsShowContactOpen(false);
  }

  function handleOpenContactModal() {
    console.log("handleOpenContactModal");
    setIsShowContactOpen(true);
  }

  return (
    <ItemWrapper onClick={handleOpenContactModal}>
      <Row style={{ gap: "1rem" }}>
        <Avatar name={completeName} />
        <ContactName>{completeName}</ContactName>
      </Row>
      <Row style={{ gap: "1rem" }}>
        <OutlineButton color="var(--gray-600)" text="Editar" />
        <OutlineButton color="var(--red-900)" text="Excluir" />
      </Row>
      <ShowContactModal
        contact={contact}
        isOpen={isShowContactOpen}
        onRequestClose={handleCloseContactModal}
      />
    </ItemWrapper>
  );
}
