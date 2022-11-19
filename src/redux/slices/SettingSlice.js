//External Lib Import
import { createSlice } from "@reduxjs/toolkit";

//Internal Lib Import
import SessionHelper from "../../helper/SessionHelper";

const SettingSlice = createSlice({
  name: "Setting",
  initialState: {
    IsLoading: false,
    Language: SessionHelper.GetLanguage(),
  },
  reducers: {
    SetLoading(state, action) {
      state.IsLoading = true;
    },
    RemoveLoading(state, action) {
      state.IsLoading = false;
    },
    SetLanguage(state, action) {
      SessionHelper.SetLanguage(action.payload);
      state.Language = SessionHelper.GetLanguage();
    },
  },
});

export const { SetLoading, RemoveLoading, SetLanguage } = SettingSlice.actions;
export default SettingSlice.reducer;
