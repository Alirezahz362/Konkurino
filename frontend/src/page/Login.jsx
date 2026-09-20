import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaSignInAlt,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const halndleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!formData.phone || !formData.password) {
      setError("لطفا شماره موبایلو رمز عبور خود را وارد کنید");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1200);
  };
  return (
    <>
      <div className="auth-page py-5">
        <div className="auth-bg-glow glow-1"></div>
        <div className="auth-bg-glow glow-2"></div>
        <div className="container auth-container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 colmd-8 col-lg-5">
              <Link
                to="/"
                className="back-link mb-4 d-inline-flex align-items-center gap-2"
              >
                <FaArrowRight />
                بازگشت به صفحه اصلی
              </Link>

              <div className="auth-card">
                <div className="auth-header text-center mb-4">
                  <h2 className="auth-title fw-bold">
                    ورود به کنکورینو<span>.</span>
                  </h2>
                  <p className="auth-subtitle text-muted">
                    برای دسترسی به دوره‌ها و پنل کاربری وارد شوید
                  </p>
                </div>
                {error && (
                  <div
                    className="alert alert-danger py-2 text-center text-sm mb-3"
                    role="alert"
                  >
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="auth-form">
                  <div className="from-group mb-3">
                    <label htmlFor="phone" className="form-label">
                      {" "}
                      شماره تلفن
                    </label>
                    <div className="input-icon-wrapper">
                      <FaPhone className="input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="مثلا 09123456789"
                        value={formData.phone}
                        onChange={halndleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="d-flex justify-content-between align-item-center mb-1">
                      <label htmlFor="password" className="form-label mb-0">
                        رمز عبور
                      </label>
                      <Link to="/forgot-password" className="forgot-link">
                        رمز عبور را فراموش کرده ابد؟
                      </Link>
                    </div>
                    <div className="input-icon-wrapper">
                      <FaLock className="input-icon" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="رمز عبور خود را وارد کنید"
                        value={formData.password}
                        onChange={halndleChange}
                      />
                      <button
                        type="button"
                        className="password-toggle-btn"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="تغییروضعیت نمایش رمز"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onChange={halndleChange}
                    />
                    <label htmlFor="rememberMe" className="form-ckeck-label">
                      مرا به خاطر بسپار
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>در حال ورود...</span>
                    ) : (
                      <>
                        <FaSignInAlt /> ورود به حساب
                      </>
                    )}
                  </button>
                </form>
                <div className="auth-footer text-center mt-4 pt-3 border-top border-secondary-subtle">
                  <p className="mb-0 text-muted">
                    حساب کاربری ندارید؟
                    <Link to="/register" className="register-link fw-bold">
                      ثبت نام کنید
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
