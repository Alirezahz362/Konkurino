const Major = (props) => {
  //******************* Content Show Handler******************************* */
  return (
    <>
      {/* //////////////////////////////////// Accardion Botton Handler and show content  ///////////////////////////////////////////*/}
      <div className="col col-sm-1 col-md-1 col-lg-1 rounded-4 accordion reshte">
        <div
          className="accordion-item h-100 justify-content-center"
          style={{ width: "100%" }}
        >
          <h2
            className="accordion-header h-100 align-content-center text-center"
            style={{ writingMode: "vertical-lr", cursor: "pointer" }}
            onClick={props.hAccordionClick}
          >
            {props.btnName}
          </h2>
        </div>
      </div>
      {props.bakhshBaz === props.oSData && (
        <div
          className="col-12 col-sm-8 col-md-8 col-lg-8 border rounded-3 bg-danger p-3"
          style={{ cursor: "pointer" }}
          onClick={props.ostadHandel}
        >
          محتوا این مربوط به بخش {props.btnName} میباشد
        </div>
      )}
    </>
  );
};
export default Major;
