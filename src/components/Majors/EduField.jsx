import Tajrobi from "./Tajrobi";
import Riazi from "./Riazi";
import Ensani from "./Ensani";
const EduField = (props) => {
  const { hAccordionClick, field, isOpen, btnName } = props;

  //******************* Content Show Handler******************************* */
  return (
    <>
      {/* //////////////////////////////////// Accardion Botton Handler and show content  ///////////////////////////////////////////*/}
      <div className="col-12 col-sm col-md-1 major-btn ">
        <button
          className="btn btn-primary p-0 w-100 "
          onClick={hAccordionClick}
        >
          {btnName}
        </button>
      </div>
    </>
  );
};
export default EduField;
