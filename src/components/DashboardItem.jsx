function DashboardItem({ heading, value }) {
  return (
    <>
      <div className="dashboard-item">
        <span className="dashboard-heading">{heading}</span>
        <span className="dashboard-value">{value}</span>
      </div>
    </>
  );
}

export default DashboardItem;
