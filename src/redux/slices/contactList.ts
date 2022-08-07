import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../../shared/interfaces";
import { RootState } from "../store";

const initialState: IContact[] = [
  {
    name: "João",
    lastName: "Silva",
    surname: "Santos",
    telephone: ["+55 (11) 99999-9999"],
    email: "leonardofelipe931@gmal.com",
    address: {
      cep: "01001-000",
      street: "Rua dos Bobos",
      number: "0",
      neighborhood: "Bairro dos Bobos",
      complement: "",
      city: "São Paulo",
      state: "SP",
    },
    tag: "Amigo",
  },
  {
    name: "Leonardo",
    surname: "Leo",
    telephone: ["(95) 99171-8840"],
    email: "leonardofelipe931@gmal.com",
    address: {
      cep: "69314-338",
      street: "Rua dos Bobos",
      number: "0",
      neighborhood: "Bairro dos Bobos",
      complement: "",
      city: "Boa Vista",
      state: "RR",
    },
  },
];

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
