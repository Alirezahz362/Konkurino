import React, {useState } from "react";
import Major from "./Major";
const Teachers = () => {
  // حالت برای باز بودن آکاردیون‌ها
  const [openSection, setOpenSection] = useState(null);
  
  // حالت برای چرخش عکس و محتوای استاد
  const professors = [
    {
      name: "استاد اول",
      description: "توضیح درباره استاد اول.",
    },
    {
      name: "استاد دوم",
      description: "توضیح درباره استاد دوم.",
    },
    {
      name: "استاد سوم",
      description: "توضیح درباره استاد سوم.",
    },
    {
      name: "استاد چهارم",
      description: "توضیح درباره استاد چهارم.",
    },
  ];

  const [currentProfessorIndex, setCurrentProfessorIndex] = useState(0);
  const [rotationDegree, setRotationDegree] = useState(0);

  const handleAccordionClick = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleProfessorClick = () => {
    setRotationDegree((prev) => prev + 90);
    setCurrentProfessorIndex((prev) => (prev + 1) % professors.length);
  };
  
  return (
    <div className="container-fluid my-5" style={{ height: "500px" }}>
      <div className="row gap-2 me-1">
        {/* تب تجربی */}
        <Major
          hAccordionClick={() => handleAccordionClick("tasviri")}
          oSData="tasviri"
          btnName="تجربی"
          bakhshBaz={openSection}
          ostadHandel={handleProfessorClick}
        ></Major>
        {/* تب ریاضی */}
        <Major
          hAccordionClick={() => handleAccordionClick("riazi")}
          oSData="riazi"
          btnName="ریاضی"
          bakhshBaz={openSection}
          ostadHandel={handleProfessorClick}
        ></Major>
        {/* تب انسانی */}
        <Major
          hAccordionClick={() => handleAccordionClick("ensani")}
          oSData="ensani"
          btnName="انسانی"
          bakhshBaz={openSection}
          ostadHandel={handleProfessorClick}
        ></Major>

        {/* محتوای پیشفرض */}
        {openSection === null && (
          <div
            className="col-12 col-sm-8 col-md-8 col-lg-8 ms-auto border rounded-3
             bg-light p-3 position-relative overflow-hidden "
            style={{ cursor: "pointer" }}
            onClick={handleProfessorClick}
          >
            <div className="d-flex h-100 w-50" id="accordion-Content">
              {
                /* می‌تونی محتوای دلخواه رو اینجا قرار بدی */
                <div style={{ marginTop: "10px" }}>
                  <h3>{professors[currentProfessorIndex].name}</h3>
                  <p>{professors[currentProfessorIndex].description}</p>
                </div>
              }
            </div>
            <img
              src="/img/teachers.png"
              id="myImage"
              className="image position-absolute top-0  overflow-hidden"
              alt=""
              style={{
                transform: `rotate(${rotationDegree}deg)`,
                transition: "transform 0.3s",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Teachers;
