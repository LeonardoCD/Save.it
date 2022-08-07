import { configureStore } from "@reduxjs/toolkit";
import { activeContactSlice } from "./slices/activeContact";
import { contactListSlice } from "./slices/contactList";


const store = configureStore({
  reducer: {
    contactList: contactListSlice.reducer,
    activeContact: activeContactSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;