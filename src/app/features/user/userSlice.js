import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  email: "",
  photoURL: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginCredentials: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
    },
    setSignOut: (state) => {
      state.displayName = "";
      state.email = "";
      state.photoURL = "";
    },
  },
});

export const { setUserLoginCredentials, setSignOut } = userSlice.actions;
//full stores state is passed in
export const selectUser = (state) => state.user;
export default userSlice.reducer;
