import { ContactName, ItemWrapper } from "./styles";
import { Avatar } from "@chakra-ui/avatar";
import { OutlineButton, Row } from "..";
import { IContact } from "../../shared/interfaces";

interface ContactItemProps {
  contact: IContact;
}

export function ContactItem({ contact }: ContactItemProps) {
  const completeName = `${contact.name} ${contact.lastName}`;
  return (
    <ItemWrapper>
      <Row style={{ gap: "1rem" }}>
        <Avatar name={completeName} />
        <ContactName>{completeName}</ContactName>
      </Row>
      <Row style={{ gap: "1rem" }}>
        <OutlineButton color="var(--gray-600)" text="Editar" />
        <OutlineButton color="var(--red-900)" text="Excluir" />
      </Row>
    </ItemWrapper>
  );
}
