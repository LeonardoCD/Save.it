import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../../shared/interfaces";
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
  },
});

export const { addContact, removeContact } = contactListSlice.actions;
export const getContactList = (state: RootState) => state.contactList;
