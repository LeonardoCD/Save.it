import { Header } from "../../components";
import { getActiveContact } from "../../redux/slices";
import { useSelector } from "../../shared/hooks";
import { IPrefillForm } from "../../shared/interfaces";
import { FormCreateContact } from "./components/FormCreateContact";

export function EditContact() {
  const contact = useSelector(getActiveContact);
  const { address } = contact;
  const { cep, street, number, neighborhood, complement, city, state } =
    address;
  const telephone = contact.telephone[0];
  const telephone2 = contact.telephone[1];

  const newContact: IPrefillForm = {
    ...contact,
    telephone,
    telephone2,
    cep,
    street,
    number,
    neighborhood,
    complement,
    city,
    state,
  };

  return (
    <>
      <Header />
      <FormCreateContact contact={newContact} />
    </>
  );
}
