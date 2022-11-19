//external import
import { createSlice } from "@reduxjs/toolkit";
import SessionHelper from "../../helper/SessionHelper";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    accessToken: SessionHelper.GetAccessToken() || undefined,
  },
  reducers: {
    SetLogin: (state, action) => {
      SessionHelper.SetToken(action.payload);
      state.accessToken = SessionHelper.GetAccessToken() || undefined;
    },
    SetLogout: (state, action) => {
      SessionHelper.RemoveToken();
      state.accessToken = SessionHelper.GetAccessToken() || undefined;
    },
  },
});

export const { SetLogin, SetLogout } = AuthSlice.actions;
export default AuthSlice.reducer;
