import { createSlice } from "@reduxjs/toolkit";
import { referralData, routes } from "./constants";
import FriendsReffered from "../components/FriendsRefferedScreen";

const editorSlice = createSlice({
  name: "referral",
  initialState: {
    referralState: {
      referralEarning: "₹ 2,500",
      totalReferrals: "7",
      walletBalance: "₹ 500",
      referralCode: "EDCH54",
      numberOfFriendsReferred: referralData.length,
      referralData: referralData,
      routes: routes,
    },
  },
  reducers: {
    addRoute: (state, action) => {
      console.log(action);
      state.referralState.routes = routes.push({
        name: "Friends Referred",
        component: <FriendsReffered />,
        link: "/friendsReferred",
      });
    },
    removeRoute: (state, action) => {
      console.log(action);
      // state.referralState.routes.pop();
      state.referralState.routes.pop();
      state.referralState.routes = routes;
    },
  },
});
export const { addRoute, removeRoute } = editorSlice.actions;
export default editorSlice.reducer;
