import { configureStore } from "@reduxjs/toolkit";
import { activeContactSlice, activeTagSlice, contactListSlice } from "./slices";

const store = configureStore({
  reducer: {
    contactList: contactListSlice.reducer,
    activeContact: activeContactSlice.reducer,
    activeTag: activeTagSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
