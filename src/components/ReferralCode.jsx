import { useSelector } from "react-redux";

function ReferralCode() {
  const referralState = useSelector((store) => store?.referral?.referralState);
  return (
    <>
      <div>
        <span className="ReferralHeading">Your Referral Code</span>
        <input
          value={referralState?.refferalCode}
          type="text"
          readOnly={true}
        />
      </div>
    </>
  );
}

export default ReferralCode;
