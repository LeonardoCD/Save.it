import { ContactName, ItemWrapper } from "./styles";
import { Avatar } from "@chakra-ui/avatar";
import { OutlineButton, Row} from "..";
import { IContact } from "../../shared/interfaces";

interface ContactItemProps {
  contact: IContact;
  onClick?: () => void;
}

export function ContactItem({ contact, onClick }: ContactItemProps) {
  let completeName = "";
  if (contact.lastName) {
    completeName = `${contact.name} ${contact.lastName}`;
  } else {
    completeName = contact.name;
  }

  return (
    <ItemWrapper onClick={onClick}>
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
