import { useSelector } from "react-redux";
import EnrollmentCard from "./EnrollmentCard";
import ReferralCode from "./ReferralCode";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function FriendsReffered() {
  const referralState = useSelector((store) => store?.referral?.referralState);
  return (
    <>
      <div style={{ maxWidth: "1200px", minHeight: "70vh" }}>
        <div style={{ margin: "1rem auto", width: "90%" }}>
          <a href="#" style={{ textDecoration: "none" }} className="go-back">
            <Link to="/" style={{ textDecoration: "none", color: "#800080" }}>
              <span style={{ color: "#800080", letterSpacing: "1px" }}>
                {"<-  go back"}
              </span>
            </Link>
          </a>
          <div className="hero-friends-refer">
            <ReferralCode isFriendsReferredScreen={true} />
            <Dashboard isFriendsReferredScreen={true} />
          </div>
          <span className="friends-reffered-heading">
            Friends who enrolled{" "}
            <span className="friends-number">{`(${referralState?.numberOfFriendsReferred})`}</span>
          </span>
          <div className="enrollment-cards-container">
            {referralState?.referralData?.map((val, idx) => {
              return <EnrollmentCard key={idx} {...val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendsReffered;
