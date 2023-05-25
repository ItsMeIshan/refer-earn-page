import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RouteComponent({ routes = [] }) {
  const referralState = useSelector((store) => store?.referral?.referralState);
  return (
    <>
      <div style={{ maxWidth: "1000px" }}>
        <div style={{ width: "90%", margin: "0 auto" }}>
          {referralState?.routes?.map((val, idx) => {
            return (
              <span key={idx}>
                <Link
                  to={val?.link}
                  style={{ textDecoration: "none", color: "#800080" }}
                >
                  <span style={{ color: "#800080", letterSpacing: "1px" }}>
                    {val?.name} {idx < routes?.length - 1 ? "> " : ""}
                  </span>
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default RouteComponent;
