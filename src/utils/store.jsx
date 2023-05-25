import { configureStore } from "@reduxjs/toolkit";
import referralSlice from "./referralSlice";

const store = configureStore({
  reducer: {
    referral: referralSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
