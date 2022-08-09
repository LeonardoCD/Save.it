import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact, IEditContact } from "../../shared/interfaces";
import { RootState } from "../store";
import { contactList, fullName } from "../../shared/utils";

const initialState: IContact[] = contactList;

export const contactListSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addContact(state, { payload }: PayloadAction<IContact>) {
      state.push(payload);
      return state;
    },
    removeContact(state, { payload }: PayloadAction<IContact>) {
      const payloadName = fullName(payload.name, payload.lastName);

      const contact = state.filter((contact) => {
        const contactName = fullName(contact.name, contact.lastName);
        return contactName !== payloadName;
      });

      state = contact;
      return state;
    },
    editContact(state, { payload }: PayloadAction<IEditContact>) {
      const { activeContact, newContact } = payload;

      const activeContactName = fullName(
        activeContact.name,
        activeContact.lastName
      );

      const contact = state.filter((contact) => {
        const contactName = fullName(contact.name, contact.lastName);
        return contactName !== activeContactName;
      });

      contact.push(newContact);
      state = contact;
      return state;
    },
  },
});

export const { addContact, removeContact, editContact } =
  contactListSlice.actions;
export const getContactList = (state: RootState) => state.contactList;
