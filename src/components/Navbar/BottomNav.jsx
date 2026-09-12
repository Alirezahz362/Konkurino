 import { useState } from "react";
import CourseSheet from "./CourseSheet/CourseSheet";

 
 const BottomNav = ()=>{

    const [showCourse, setShowCourse]=useState(false)

    return (
      <>
        <nav className="bottom-navigation">
          <a href="#" className="bottom-item">
            <i className="fa-solid fa-house"></i>
            <span>خانه</span>
          </a>

          <a href="#" className="bottom-item"
            onClick={()=>{setShowCourse(true)}}>
            <i className="fa-solid fa-book"></i>
            <span>دوره‌ها</span>
          </a>

          <a href="#" className="bottom-item">
            <i className="fa-solid fa-pen"></i>
            <span>آزمون‌ها</span>
          </a>

          <a href="#" className="bottom-item">
            <i className="fa-solid fa-user"></i>
            <span>حساب</span>
          </a>
        </nav>
        {showCourse &&
        <CourseSheet close={()=>setShowCourse(false)}/>}
      </>
    );
 }
 export default BottomNav