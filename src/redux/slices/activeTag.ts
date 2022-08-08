import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: string = "";

export const activeTagSlice = createSlice({
  name: "activeTag",
  initialState,
  reducers: {
    setActiveTag(state, { payload }: PayloadAction<string>) {
      state = payload;
      return state;
    },
  },
});

export const { setActiveTag } = activeTagSlice.actions;
export const getActiveTag = (state: RootState) => state.activeTag;