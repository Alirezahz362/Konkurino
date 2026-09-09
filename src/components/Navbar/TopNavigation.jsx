import { useState } from "react";
const TopNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [courseMenu, setCourseMenu] = useState(false);

  return (
    <>
      <header dir="ltr">
        <nav className="navbar navbar-expand-md bg-purpleking fixed-top">
          <div className="container-fluid">
            <a href="" className="navbar-brand text-light fw-bold fs-2">
              <i id="brandIcon" className="fa-solid fa-user-graduate"></i>
              کنکورینو
            </a>

            <button
              className="navbar-toggler fs-1 p-0 fw-bold"
              type="button"
              onClick={() => setOpenMenu(!openMenu)}
              data-bs-target="#hamBtn"
            >
              <span
                id="btnIcon"
                className={`fas  ${openMenu ? "fa-book-open" : "fa-book"}`}
              ></span>
            </button>
            <div
              className={`collapse navbar-collapse ${openMenu ? "show" : ""}`}
              id="hamBtn"
            >
              <ul className="navbar-nav ms-auto" dir="rtl">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    خونه
                  </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
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

                <form
                  action=""
                  className="d-flex h-25"
                  style={{ width: "300px" }}
                >
                  <div className="input-group" dir="ltr">
                    <input
                      className="form-control rounded-start-5"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-sm btn-outline-light rounded-end-5">
                      search
                    </button>
                  </div>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default TopNavigation;
