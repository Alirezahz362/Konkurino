export default function Grid(props) {
  return (
    <>
      <div className="container-fluid py-3 my-5">
        <h1 className="heading text-center">دوره آموزشی</h1>
        <div className="row d-flex justify-content-center ">
          <div className="col col-sm-2 col-md-3 w-100">
            {props.children}</div>
        </div>
      </div>
    </>
  );
}
