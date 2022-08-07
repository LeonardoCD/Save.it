import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "../../shared/interfaces";
import { RootState } from "../store";

const initialState: IContact = {} as IContact;

export const activeContactSlice = createSlice({
  name: "activeContact",
  initialState,
  reducers: {
    setActiveContact(state, { payload }: PayloadAction<IContact>) {
      state = payload;
      return state;
    },
  },
});

export const { setActiveContact } = activeContactSlice.actions;
export const getActiveContact = (state: RootState) => state.activeContact;