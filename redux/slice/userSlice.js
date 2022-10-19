import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
});

const initialState = {
  loading: false,
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state) => {
      state.users = state.payload;
      state.loading = true;
    },
    [fetchUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
