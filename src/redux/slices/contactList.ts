import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../../shared/interfaces";
import { RootState } from "../store";
import { contactList } from "../../shared/utils";

const initialState: IContact[] = contactList;

export const contactListSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addContact(state, { payload }: PayloadAction<IContact>) {
      state.push(payload);
      return state;
    },
  },
});

export const { addContact } = contactListSlice.actions;
export const getContactList = (state: RootState) => state.contactList;
