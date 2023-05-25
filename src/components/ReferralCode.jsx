import { useSelector } from "react-redux";

function ReferralCode({ isFriendsReferredScreen = false }) {
  const referralState = useSelector((store) => store?.referral?.referralState);
  return (
    <>
      <div
        className={`referral-code-container ${
          isFriendsReferredScreen ? "friends-referred-referral-code" : ""
        }`}
      >
        <span className="referral-heading">Your Referral Code</span>
        <input
          className="referral-code border-gradient"
          value={referralState?.referralCode}
          type="text"
          readOnly={true}
        />
      </div>
    </>
  );
}

export default ReferralCode;
