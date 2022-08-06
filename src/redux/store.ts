import { configureStore } from "@reduxjs/toolkit";
import { contactListSlice } from "./slices/contactList";


const store = configureStore({
  reducer: {
    contactList: contactListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;