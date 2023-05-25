import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import ReferralCode from "./ReferralCode";
import StepsComponent from "./StepsComponent";

function ReferScreen() {
  return (
    <>
      <div style={{ maxWidth: "1200px", marginTop: "3rem", minHeight: "60vh" }}>
        <div style={{ width: "90%", margin: "0 auto" }}>
          <div className="dashboard-container">
            <Dashboard />
            <ReferralCode />
          </div>
          <StepsComponent />
          <a className="friends-enrolled-btn" href="#">
            <Link
              style={{ textDecoration: "none", color: "#800080" }}
              to={"/friendsReferred"}
            >
              Friends Who Enrolled
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}

export default ReferScreen;
