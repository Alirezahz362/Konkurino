import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhone, FaLock, FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa';
import useForm from '../hooks/useForm';

const Login = () => {
  const navigate = useNavigate();


  const { values, handleChange } = useForm({
    phone: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!values.phone || !values.password) {
      setError('لطفاً شماره موبایل و رمز عبور خود را وارد کنید.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <>
      <div className="auth-header text-center mb-4">
        <h2 className="auth-title fw-bold">ورود به کنکورینو <span>.</span></h2>
        <p className="auth-subtitle text-muted">برای دسترسی به دوره‌ها و پنل کاربری وارد شوید</p>
      </div>

      {error && (
        <div className="alert alert-danger py-2 text-center text-sm mb-3" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="auth-form">
        {/* فیلد شماره موبایل */}
        <div className="form-group mb-3">
          <label htmlFor="phone" className="form-label">شماره تلفن</label>
          <div className="input-icon-wrapper">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="همانند الگو  09123456789"
              value={values.phone}
              onChange={handleChange}
              dir="ltr"
            />
          </div>
        </div>

        {/* فیلد رمز عبور */}
        <div className="form-group mb-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <label htmlFor="password" className="form-label mb-0">رمز عبور</label>
            <Link to="/forgot-password" className="forgot-link">
              رمز عبور را فراموش کرده‌اید؟
            </Link>
          </div>
          <div className="input-icon-wrapper">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="form-control"
              placeholder="رمز عبور خود را وارد کنید"
              value={values.password}
              onChange={handleChange}
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
        </div>

        {/* مرا به خاطر بسپار */}
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

        {/* دکمه ارسال */}
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

      {/* لینک ثبت‌نام */}
      <div className="auth-footer text-center mt-4 pt-3 border-top border-secondary-subtle">
        <p className="mb-0 text-muted">
          حساب کاربری ندارید؟{' '}
          <Link to="/register" className="register-link fw-bold">
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
