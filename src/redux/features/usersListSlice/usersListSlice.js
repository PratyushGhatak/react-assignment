import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  lastId: 0,
};

const usersListSlice = createSlice({
  name: "usersList",
  reducers: {
    addUser: (state, action) => {
      state.userList = [
        ...state.userList,
        { id: state.lastId + 1, ...action.payload },
      ];
      state.lastId++;
    },
    editUser: (state, action) => {
      const index = state.userList.findIndex(
        (el) => el.id == action.payload.id
      );
      if (index >= 0) {
        state.userList[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.userList = state.userList.filter((el) => el.id != action.payload);
    },
  },
  initialState,
});

export const { actions: usersListActions, reducer: usersListReducer } =
  usersListSlice;
