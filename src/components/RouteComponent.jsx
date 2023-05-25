function RouteComponent({ routes = [] }) {
  return (
    <>
      <div>
        {routes?.map((val, idx) => {
          return (
            <span key={idx}>
              {val?.name} {idx < routes?.length - 1 ? ">" : ""}
            </span>
          );
        })}
      </div>
    </>
  );
}
export default RouteComponent;
