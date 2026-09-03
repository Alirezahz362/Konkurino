import { useState } from "react";
import EduField from "./EduField";
import Teachers from "./Teachers";
import "../../Sass/scss/_teachers.scss";
const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleAccordionClick = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div
      className="container-fluid px-1 my-2 major-section"
    >
      <div className="row gx-0 gap-1 major-body">
        {/*tajrobi*/}
        <EduField
          hAccordionClick={() => handleAccordionClick("tajrobi")}
          field="tajrobi"
          btnName="تجربی"
          isOpen={openSection}
        ></EduField>
        <EduField
          hAccordionClick={() => handleAccordionClick("riazi")}
          field="riazi"
          btnName="ریاضی"
          isOpen={openSection}
        ></EduField>
        <EduField
          hAccordionClick={() => handleAccordionClick("ensani")}
          field="ensani"
          btnName="انسانی"
          isOpen={openSection}
        ></EduField>

        {openSection === null && (
          <div
            className=" col-12 col-md bg-secondary rounded-3 
           position-relative overflow-hidden"
          >
            <Teachers></Teachers>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
