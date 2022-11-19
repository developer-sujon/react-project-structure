//External LIb Import
import { configureStore } from "@reduxjs/toolkit";

//Internal LIb Import
import SettingSlice from "../slices/SettingSlice";
import AuthSlice from "../slices/AuthSlice";
import UserSlice from "../slices/UserSlice";
import BrandSlice from "../slices/BrandSlice";

const store = configureStore({
  reducer: {
    Setting: SettingSlice,
    Auth: AuthSlice,
    User: UserSlice,
    Brand: BrandSlice,
  },
});

export default store;
