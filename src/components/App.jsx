import { Outlet } from "react-router-dom";
import { routes } from "../utils/constants";
// import FriendsReffered from "./FriendsRefferedScreen";
import Header from "./Header";
// import ReferScreen from "./Refer&EarnScreen";
import RouteComponent from "./RouteComponent";

function App() {
  return (
    <>
      <Header />

      <RouteComponent routes={routes} />
      <Outlet />
      {/* <FriendsReffered />
      <ReferScreen /> */}
      <div style={{ maxWidth: "1200px" }}>
        <div style={{ margin: "1rem auto", width: "90%" }}>
          <span className="terms-conditions">Terms & Conditions</span>
        </div>
      </div>
    </>
  );
}

export default App;

/* Planning
 - Header
    - Logo
    - Nav Items
 - Navigation
    - UI/UX > Refer&earn > ...
    - Refer  & Earn Page
        - DashBoard
            - Referral Earnings
            - Total Rewards 
            - Wallet Balance
            - WithDraw Balance
        - User Referral Code
            - Referral Code Textbox
        
        - How Does it Work 
            - StepsComponent
        - Friends Refferred BTN
  
 
    - Friends Reffered Page
      - Your Referral Code
      - Wallet Balance
      - Friends Who enrolled
      - Refferral Cards (Multiple)
 - Terms and Condition BTN
*/
