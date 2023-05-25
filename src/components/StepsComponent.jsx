import Step from "./Step";

function StepsComponent() {
  return (
    <>
      <div className="steps">
        <Step
          heading={"Invite your Friends"}
          content={"Share the link tutedude.com with your friends"}
          icon={"/invite-people.png"}
        />
        <Step
          heading={"You get ₹ 200 as referral money"}
          content={"On total purchase the friend makes, into your wallet"}
          icon={"/rupee-icon-adjusted.png"}
        />
        <Step
          heading={"Friend purchases any course"}
          content={"Using your REFERRAL CODE in the payments page"}
          icon={"/referral-icon.png"}
        />
        <Step
          heading={"Transfer money from wallet"}
          content={
            "When the wallet balance reaches ₹200 or more, you can withdraw it"
          }
          icon={"/wallet-icon.png"}
        />

        <Step
          heading={"Your Friend gets ₹ 200 Off "}
          content={
            "On his overall fee on successful purchase using your referral code "
          }
          icon={"/discount-icon.png"}
        />
      </div>
    </>
  );
}

export default StepsComponent;
