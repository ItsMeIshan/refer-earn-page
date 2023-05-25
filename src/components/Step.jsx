function Step({ heading, content, icon }) {
  return (
    <>
      <div className="step-container">
        <div className="step-logo">
          <img height={"32px"} width={"32px"} src={icon} alt="" />
        </div>
        <div>
          <span className="step-heading">{heading}</span>
          <p className="step-content">{content}</p>
        </div>
      </div>
    </>
  );
}

export default Step;
