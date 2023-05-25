import { routes } from "../utils/constants";
import Header from "./Header";
import ReferScreen from "./Refer&EarnScreen";
import RouteComponent from "./RouteComponent";

function App() {
  return (
    <>
      <Header />
      <RouteComponent routes={routes} />
      <ReferScreen />
      <span className="terms-conditions">Terms & Conditions</span>
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
