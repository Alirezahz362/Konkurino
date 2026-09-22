import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
  FaGlobe,
} from "react-icons/fa";
import useForm from "../hooks/useForm";
import { loginUser } from "../services/authService";
import {
  validateLoginForm,
  validatePhoneLive,
  validatePasswordLive,
  hasPersianCharacters,
} from "../utils/validation";

const Login = () => {
  const navigate = useNavigate();

  const { values, handleChange } = useForm({
    phone: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    handleChange(e);
    const { name, value } = e.target;

    if (name === "phone") {
      const liveErr = validatePhoneLive(value);
      setErrors((prev) => ({ ...prev, phone: liveErr }));
    }

    if (name === "password") {
      const liveErr = validatePasswordLive(value);
      setErrors((prev) => ({ ...prev, password: liveErr }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validateLoginForm(values);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const responseMessage = await loginUser({
        phone: values.phone,
        password: values.password,
      });
      navigate("/");
    } catch (err) {
      setErrors(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="auth-header text-center mb-4">
        <h2 className="auth-title fw-bold">
          ورود به کنکورینو <span>.</span>
        </h2>
        <p className="auth-subtitle text-muted">
          برای دسترسی به دوره‌ها و پنل کاربری وارد شوید
        </p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form" noValidate>
        <div className="form-group mb-3">
          <label htmlFor="phone" className="form-label">
            شماره تلفن
          </label>
          <div className="input-icon-wrapper">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              placeholder="همانند 09123456789"
              value={values.phone}
              onChange={handleInputChange}
              dir="ltr"
            />
          </div>
          {errors.phone && (
            <span className="text-danger text-xs mt-1 d-block fw-medium">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="form-group mb-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <label htmlFor="password" className="form-label mb-0">
              رمز عبور
            </label>
            <Link to="/forgot-password" className="forgot-link">
              رمز عبور را فراموش کرده‌اید؟
            </Link>
          </div>
          <div className="input-icon-wrapper">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="رمز عبور خود را وارد کنید"
              value={values.password}
              onChange={handleInputChange}
              dir="ltr"
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="تغییر وضعیت نمایش رمز"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {hasPersianCharacters(values.password) && (
            <div className="text-warning text-xs mt-1 d-flex align-items-center gap-1 fw-bold">
              <FaGlobe /> زبان کیبورد شما فارسی است. کیبورد را به انگلیسی تغییر
              دهید.
            </div>
          )}

          {errors.password && !hasPersianCharacters(values.password) && (
            <span className="text-danger text-xs mt-1 d-block fw-medium">
              {errors.password}
            </span>
          )}
        </div>

        <div className="form-check mb-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
            name="rememberMe"
            checked={values.rememberMe}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="rememberMe">
            مرا به خاطر بسپار
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2"
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
          حساب کاربری ندارید؟{" "}
          <Link to="/register" className="register-link fw-bold">
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
