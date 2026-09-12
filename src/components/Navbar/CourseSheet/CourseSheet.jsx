const CourseSheet  = (props)=>{
     const {close} = props

    return (
      <>
        <div className="course-overlay" onClick={close}>
          <div className="course-sheet" onClick={(e)=>{e.stopPropagation()}}>
            <button onClick={close}> × </button>
            <h5> دوره ها </h5>
            <div className="course-options">
              <a>
                <i className="fa-solid fa-book-open"></i>
                رایگان
              </a>

              <a>
                <i className="fa-solid fa-graduation-cap"></i>
                اشتراکی
              </a>

              <a>
                <i className="fa-solid fa-star"></i>
                تخصصی
              </a>
            </div>
          </div>
        </div>
      </>
    );
}
export default CourseSheet