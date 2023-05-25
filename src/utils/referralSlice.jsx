import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
  name: "referral",
  initialState: {
    referralState: {
      referralEarning: "₹ 2,500",
      totalReferrals: "7",
      walletBalance: "₹ 500",
      refferalCode: "EDCH54",
    },
  },
  reducers: {},
});
// export const {

// } = editorSlice.actions;
export default editorSlice.reducer;
