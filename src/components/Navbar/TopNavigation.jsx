import { useState, useRef, useEffect } from "react";

const TopNavigation = () => {
  const [courseMenu, setCourseMenu] = useState(false);
  const courseMenuRef = useRef(null);

  useEffect(() => {
    const hanldeClickOutside = (Event) => {
      if (
        courseMenuRef.current &&
        !courseMenuRef.current.contains(Event.target)
      ) {
        setCourseMenu(false);
      }
    };

    document.addEventListener("mousedown", hanldeClickOutside);

    return () => {
      document.removeEventListener("mousedown", hanldeClickOutside);
    };
  }, []);
  return (
    <>
      <header>
        <nav className="navbar bg-brand">
          <div className="container-fluid">
            <div className="navbar-content">
              <ul className="navbar-nav navbar-links">
                <li className="nav-item">
                  <a href="#" className="nav-link ">
                    خونه
                  </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown"
                  ref={courseMenuRef}>
                    <button
                      className="nav-link dropdown-toggle bg-transparent border-0"
                      onClick={() => setCourseMenu(!courseMenu)}
                    >
                      دوره آموزشی
                    </button>

                    {courseMenu && (
                      <ul className="dropdown-menu dropdown-menu-dark show">
                        <li>
                          <a href="#" className="dropdown-item">
                            رایگان
                          </a>
                        </li>

                        <li>
                          <a href="#" className="dropdown-item">
                            اشتراکی
                          </a>
                        </li>

                        <li>
                          <a href="#" className="dropdown-item">
                            تخصصی
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    {" "}
                    مقالات{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    {" "}
                    درباره ما / تماس با ما{" "}
                  </a>
                </li>
              </ul>
              <form className="navbar-search">
                <div className="search-box">
                  <input
                    className="search-input"
                    type="search"
                    placeholder="جستجو در کنکورینو..."
                  />

                  <button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default TopNavigation;
