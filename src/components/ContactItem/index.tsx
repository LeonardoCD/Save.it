import { ContactName, ContactNameWrapper, ItemWrapper } from "./styles";
import { Avatar } from "@chakra-ui/avatar";
import { DeleteContactModal, OutlineButton, Row } from "..";
import { IContact } from "../../shared/interfaces";
import { useState } from "react";
import { fullName } from "../../shared/utils";

interface ContactItemProps {
  contact: IContact;
  onClick?: () => void;
}

export function ContactItem({ contact, onClick }: ContactItemProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const name = fullName(contact.name, contact.lastName);
 

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  return (
    <ItemWrapper>
      <ContactNameWrapper onClick={onClick}>
        <Avatar name={name} />
        <ContactName>{name}</ContactName>
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
        contactName={name}
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
      />
    </ItemWrapper>
  );
}
