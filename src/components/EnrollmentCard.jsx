import CourseChip from "./CourseChip";

function EnrollmentCard(props) {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <span className="card-name">{props?.name}</span>
          <span className="card-date">{props?.date}</span>
        </div>
        <span className="card-courses">
          Courses Enrolled{`(${props?.numberOfCourses})`}
        </span>
        <div className="chip-container">
          {props?.topics.map((val, idx) => {
            return <CourseChip key={idx} name={val} />;
          })}
        </div>

        <span className="card-referral-amount">
          Referral Amount{" "}
          <span className="card-referral-price">{props?.referralAmount}</span>
        </span>
      </div>
    </>
  );
}

export default EnrollmentCard;
