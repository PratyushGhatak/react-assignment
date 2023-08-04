import { configureStore } from "@reduxjs/toolkit";
import { usersListReducer } from "../features/usersListSlice/usersListSlice";
import { logger } from "redux-logger";
export const store = configureStore({
  reducer: {
    usersList: usersListReducer,
  },
  //   getDefaultMiddleware has Redux Thunk already
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

//   usersListActions
