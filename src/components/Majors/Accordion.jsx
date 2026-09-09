import { useId, useState } from "react";
import EduField from "./EduField";
import Teachers from "./Teachers";
import Tajrobi from "./Tajrobi";
import Ensani from "./Ensani";
import Riazi from "./Riazi";

import "../../Sass/Accordion/_teachers.scss";
const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleAccordionClick = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };
  
  return (
    <>
      <div className="container-fluid px-1 my-2 major-section">
        <div className="row gx-0 gap-1 major-body">
          {[
            {
              id: useId(),
              hAccordionClick: () => handleAccordionClick("tajrobi"),
              btnName: "تجربی",
            },
            {
              id: useId(),
              hAccordionClick: () => handleAccordionClick("riazi"),
              btnName: "ریاضی",
            },
            {
              id: useId(),
              hAccordionClick: () => handleAccordionClick("ensani"),
              btnName: "انسانی",
            },
          ].map((item) => (
            <EduField key={item.id} {...item} />
          ))}

          <div
            className=" col-12 col-md bg-secondary rounded-3 
            position-relative overflow-hidden"
          >
            {openSection === null && <Teachers></Teachers>}
            {openSection === "tajrobi" && <Tajrobi></Tajrobi>}
            {openSection === "riazi" && <Riazi></Riazi>}
            {openSection === "ensani" && <Ensani></Ensani>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
