import React, { useState } from "react";
import "../../styles/components/Accordion/_TaechCards.scss";
export default function Teachers() {
  const [rotation, setRotarion] = useState(0);
  const handelRotation = () => {
    setRotarion((prevRtation) => prevRtation + 90);
  };

  return (
    <>
      <div className="row bg-info">
        <div className="col" onClick={handelRotation}>
          <div className="circle-position">
            <div
              className="circle"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div
                className="quarter"
                style={{ transform: `rotate(${-rotation}deg)` }}
              >
                <img src="\img\teacher 1.jpg" alt="" />
              </div>
              <div
                className="quarter"
                style={{ transform: `rotate(${-rotation}deg)` }}
              >
                <img src="\img\teacher2.jpg" alt="" />
              </div>
              <div
                className="quarter"
                style={{ transform: `rotate(${-rotation}deg)` }}
              >
                <img src="\img\teacher3.jpg" alt="" />
              </div>
              <div
                className="quarter"
                style={{ transform: `rotate(${-rotation}deg)` }}
              >
                <img src="\img\teacher4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
