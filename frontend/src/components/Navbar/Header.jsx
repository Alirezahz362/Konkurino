import { FaBell, FaMoon, FaSun, FaUser, FaUserPlus } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="container-fluid py-1 shadow-sm bg-surface">
      <div className="container">
        <div
          className="
        d-flex
        align-items-center
        justify-content-between
        flex-nowrap
        gap-2
      "
        >
          <div className="d-flex align-items-center gap-2">
            <Link
              to="/login"
              className="
              btn
              btn-outline-secondary
              rounded-pill
              d-flex
              align-items-center
             gap-2
           "
            >
              <FaUser />

              <span className="d-none d-sm-inline">ورود</span>
            </Link>

            <Link
              to="/register"
              className="
            btn
            btn-brand
            rounded-pill
            d-flex
            align-items-center
            gap-2
          "
            >
              <FaUserPlus />

              <span className="d-none d-sm-inline">ثبت نام</span>
            </Link>
          </div>

          {/* لوگو */}
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            <h1 className="m-0 fw-bold text-theme">کنکورینو</h1>
            <i id="brandIcon" className="fa-solid fa-user-graduate fs-5"></i>
          </div>

          {/* نوتیف و تم */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="
            btn
            
            header-icon 
            rounded-circle
            d-flex
            align-items-center
            justify-content-center
            p-0
          "
              style={{
                width: "40px",
                height: "40px",
              }}
            >
              <FaBell />
            </button>

            <button
              className="
            btn
            header-icon 
            rounded-circle
            d-flex
            align-items-center
            justify-content-center
            p-0
          "
              type="button"
              style={{
                width: "40px",
                height: "40px",
              }}
              onClick={toggleTheme}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
