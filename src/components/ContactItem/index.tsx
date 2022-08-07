import { ContactName, ContactNameWrapper, ItemWrapper } from "./styles";
import { Avatar } from "@chakra-ui/avatar";
import { DeleteContactModal, OutlineButton, Row } from "..";
import { IContact } from "../../shared/interfaces";
import { useState } from "react";

interface ContactItemProps {
  contact: IContact;
  onClick?: () => void;
}

export function ContactItem({ contact, onClick }: ContactItemProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  let completeName = "";
  if (contact.lastName) {
    completeName = `${contact.name} ${contact.lastName}`;
  } else {
    completeName = contact.name;
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  return (
    <ItemWrapper>
      <ContactNameWrapper onClick={onClick}>
        <Avatar name={completeName} />
        <ContactName>{completeName}</ContactName>
      </ContactNameWrapper>
      <Row style={{ gap: "1rem" }}>
        <OutlineButton color="var(--gray-600)" text="Editar" />
        <OutlineButton
          color="var(--red-900)"
          text="Excluir"
          onClick={() => {
            setIsDeleteModalOpen(true);
          }}
        />
      </Row>
      <DeleteContactModal
        contactName={completeName}
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
      />
    </ItemWrapper>
  );
}
