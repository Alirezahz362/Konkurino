import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaPhone, FaLock, FaEye, FaEyeSlash, FaUserPlus } from 'react-icons/fa';
import useForm from '../hooks/useForm';

const Register = () => {
  const navigate = useNavigate();

  const { values, handleChange } = useForm({
    fullName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!values.fullName || !values.phone || !values.password || !values.confirmPassword) {
      setError('لطفاً تمام فیلدهای ضروری را پر کنید.');
      return;
    }

    if (values.password !== values.confirmPassword) {
      setError('رمز عبور و تکرار آن با هم مطابقت ندارند.');
      return;
    }

    if (!values.acceptTerms) {
      setError('لطفاً قوانین و مقررات کنکورینو را بپذیرید.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 1200);
  };

  return (
    <>
      <div className="auth-header text-center mb-4">
        <h2 className="auth-title fw-bold">ثبت‌نام در کنکورینو <span>.</span></h2>
        <p className="auth-subtitle text-muted">حساب کاربری جدید خود را بسازید</p>
      </div>

      {error && (
        <div className="alert alert-danger py-2 text-center text-sm mb-3" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="auth-form">
  
        <div className="form-group mb-3">
          <label htmlFor="fullName" className="form-label">نام و نام خانوادگی</label>
          <div className="input-icon-wrapper">
            <FaUser className="input-icon" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              placeholder='نام و نام خانوادگی خود را وارد کنید'
              value={values.fullName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* فیلد شماره موبایل */}
        <div className="form-group mb-3">
          <label htmlFor="phone" className="form-label">شماره موبایل</label>
          <div className="input-icon-wrapper">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="همانند الگو   09123456789"
              value={values.phone}
              onChange={handleChange}
              dir="ltr"
            />
          </div>
        </div>

        {/* فیلد رمز عبور */}
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">رمز عبور</label>
          <div className="input-icon-wrapper">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="form-control"
              placeholder="حداقل 8 کاراکتر"
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

        {/* فیلد تکرار رمز عبور */}
        <div className="form-group mb-3">
          <label htmlFor="confirmPassword" className="form-label">تکرار رمز عبور</label>
          <div className="input-icon-wrapper">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              placeholder="تکرار رمز عبور"
              value={values.confirmPassword}
              onChange={handleChange}
              dir="ltr"
            />
          </div>
        </div>

        {/* پذیرش قوانین */}
        <div className="form-check mb-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="acceptTerms"
            name="acceptTerms"
            checked={values.acceptTerms}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="acceptTerms">
            <Link to="/terms" className="register-link me-1">قوانین و مقررات</Link> کنکورینو را می‌پذیرم.
          </label>
        </div>

        {/* دکمه ارسال */}
        <button
          type="submit"
          className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <span>در حال ثبت‌نام...</span>
          ) : (
            <>
              <FaUserPlus /> ایجاد حساب کاربری
            </>
          )}
        </button>
      </form>

      {/* لینک ورود */}
      <div className="auth-footer text-center mt-4 pt-3 border-top border-secondary-subtle">
        <p className="mb-0 text-muted">
          قبلاً ثبت‌نام کرده‌اید؟{' '}
          <Link to="/login" className="register-link fw-bold">
            وارد شوید
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
