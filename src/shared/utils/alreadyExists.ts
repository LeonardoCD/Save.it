import { fullName } from ".";
import { IContact } from "../interfaces";

export function alreadyExists(
  contactList: IContact[],
  currentName: string
): boolean {
  const exists = contactList.some((contact) => {
    const name = fullName(contact.name, contact.lastName);
    return name === currentName;
  });

  return exists;
}
