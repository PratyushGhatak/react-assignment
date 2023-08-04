// const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
// const axios = require("axios");
// const initialState = {
//   users: [],
//   loading: false,
//   error: "",
// };

// //generates Pending,Success,Failed cases
// const fetchUsers = createAsyncThunk("users/fetchUser", async () => {
//   const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
//   const ids = res?.data.map((el) => el.id);
//   return ids;
// });

// const usersSlice = createSlice({
//   name: "users",

//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchUsers.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//       state.error = "";
//       state.loading = false;
//       state.users = action.payload;
//     });
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.error = action.error.message;
//       state.loading = false;
//       state.users = [];
//     });
//   },
// });

// module.exports.usersReducer = usersSlice.reducer;
// module.exports.usersActions = usersSlice.actions;
// module.exports.fetchUsers = fetchUsers;
