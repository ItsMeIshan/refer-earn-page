import { useSelector } from "react-redux";
import DashboardItem from "./DashboardItem";

function Dashboard() {
  const referralState = useSelector((store) => store?.referral?.referralState);
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-item-container">
          <DashboardItem
            heading={"Referral Earning"}
            value={referralState?.referralEarning}
          />
          <DashboardItem
            heading={"Total Referrals"}
            value={referralState?.totalReferrals}
          />
          <DashboardItem
            heading={"Wallet Balance"}
            value={referralState?.walletBalance}
          />
        </div>
        <a className="withdraw-btn" href="#">
          Withdraw Balance
        </a>
      </div>
    </>
  );
}

export default Dashboard;
