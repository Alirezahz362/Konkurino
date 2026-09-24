import { FaBell, FaMoon, FaSun, FaUser, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const { user, logoutContext } = useAuth();

  return (
    <header className="container-fluid py-1 shadow-sm bg-surface">
      <div className="container">
        <div className=" d-flex align-items-center justify-content-between flex-nowrap gap-2 " >
          

          <div className="d-flex align-items-center gap-2">
            {user ? (
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold text-theme d-flex align-items-center gap-1 fs-6">
                  <FaUser className="text-primary" />
                  <span className="d-none d-sm-inline">
                    سلام، {user.fullName || "کاربر"} 👋
                  </span>
                </span>
                <button
                  onClick={logoutContext}
                  className="btn btn-outline-danger rounded-pill btn-sm d-flex align-items-center gap-1 px-3"
                  type="button"
                >
                  <FaSignOutAlt />
                  <span className="d-none d-sm-inline">خروج</span>
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className=" btn btn-outline-secondary rounded-pill d-flex align-items-center gap-2 "
                >
                  <FaUser />
                  <span className="d-none d-sm-inline">ورود</span>
                </Link>
                <Link
                  to="/register"
                  className=" btn btn-brand rounded-pill d-flex align-items-center gap-2 "
                >
                  <FaUserPlus />
                  <span className="d-none d-sm-inline">ثبت نام</span>
                </Link>
              </>
            )}
          </div>

          {/* لوگو */}
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            <h1 className="m-0 fw-bold text-theme">کنکورینو</h1>
            <i id="brandIcon" className="fa-solid fa-user-graduate fs-5"></i>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              className=" btn header-icon rounded-circle d-flex align-items-center justify-content-center p-0 "
              style={{
                width: "40px",
                height: "40px",
              }}
              type="button"
            >
              <FaBell />
            </button>
            <button
              className=" btn header-icon rounded-circle d-flex align-items-center justify-content-center p-0 "
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
