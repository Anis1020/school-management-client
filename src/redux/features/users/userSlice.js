import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../firebaseConfig/FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const initialState = {
  user: {
    name: "",
    email: "",
    isLoading: true,
    isError: false,
    error: "",
  },
};
export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password, name }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    console.log(data);
    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, payload) => {
      state.name = payload.displayName;
      state.email = payload.email;
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logOut: (state) => {
      state.name = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.name = "";
        state.email = "";
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload.email;
        state.name = payload.name;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.name = "";
        state.email = "";
        state.error = action.error.message;
      });
  },
});

export const { setUser, toggleLoading, logOut } = userSlice.actions;
export default userSlice.reducer;
