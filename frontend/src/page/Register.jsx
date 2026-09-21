import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaPhone, FaLock, FaEye, FaEyeSlash, FaUserPlus, FaGlobe } from 'react-icons/fa';
import useForm from '../hooks/useForm';
import {
  validateRegisterForm,
  validateFullName,
  validatePhoneLive,
  validatePasswordLive,
  validateConfirmPassword,
  hasPersianCharacters
} from '../utils/validation';

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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});


  const handleInputChange = (e) => {
    handleChange(e);
    const { name, value } = e.target;

    if (name === 'fullName') {
      const err = validateFullName(value);
      setErrors((prev) => ({ ...prev, fullName: err }));
    }

    if (name === 'phone') {
      const err = validatePhoneLive(value);
      setErrors((prev) => ({ ...prev, phone: err }));
    }

    if (name === 'password') {
      const err = validatePasswordLive(value);
      setErrors((prev) => ({ ...prev, password: err }));
      if (values.confirmPassword) {
        const confirmErr = validateConfirmPassword(value, values.confirmPassword);
        setErrors((prev) => ({ ...prev, confirmPassword: confirmErr }));
      }
    }

    if (name === 'confirmPassword') {
      const err = validateConfirmPassword(values.password, value);
      setErrors((prev) => ({ ...prev, confirmPassword: err }));
    }

    if (name === 'acceptTerms') {
      setErrors((prev) => ({ ...prev, acceptTerms: e.target.checked ? '' : 'لطفاً قوانین را بپذیرید.' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validateRegisterForm(values);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
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
        <p className="auth-subtitle text-muted">برای استفاده از خدمات سایت حساب کاربری جدید بسازید</p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form" noValidate>
        {/* فیلد نام و نام خانوادگی */}
        <div className="form-group mb-3">
          <label htmlFor="fullName" className="form-label">نام و نام خانوادگی</label>
          <div className="input-icon-wrapper">
            <FaUser className="input-icon" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
              placeholder=" نام و نام خانوادگی خود را وارد کنید "
              value={values.fullName}
              onChange={handleInputChange}
            />
          </div>
          {errors.fullName && (
            <span className="text-danger text-xs mt-1 d-block fw-medium">{errors.fullName}</span>
          )}
        </div>

      
        <div className="form-group mb-3">
          <label htmlFor="phone" className="form-label">شماره تلفن</label>
          <div className="input-icon-wrapper">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              placeholder="همانند  الگوی 09123456789"
              value={values.phone}
              onChange={handleInputChange}
              dir="ltr"
            />
          </div>
          {errors.phone && (
            <span className="text-danger text-xs mt-1 d-block fw-medium">{errors.phone}</span>
          )}
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
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="شامل حرف بزرگ، کوچک و عدد (انگلیسی)"
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
              <FaGlobe /> زبان کیبورد شما فارسی است. کیبورد را به انگلیسی تغییر دهید.
            </div>
          )}

          {errors.password && !hasPersianCharacters(values.password) && (
            <span className="text-danger text-xs mt-1 d-block fw-medium">{errors.password}</span>
          )}
        </div>

        {/* فیلد تکرار رمز عبور */}
        <div className="form-group mb-3">
          <label htmlFor="confirmPassword" className="form-label">تکرار رمز عبور</label>
          <div className="input-icon-wrapper">
            <FaLock className="input-icon" />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              placeholder="رمز عبور را مجدداً وارد کنید"
              value={values.confirmPassword}
              onChange={handleInputChange}
              dir="ltr"
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label="تغییر وضعیت نمایش رمز"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="text-danger text-xs mt-1 d-block fw-medium">{errors.confirmPassword}</span>
          )}
        </div>

        {/* قوانین و مقررات */}
        <div className="form-check mb-4">
          <input
            type="checkbox"
            className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
            id="acceptTerms"
            name="acceptTerms"
            checked={values.acceptTerms}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="acceptTerms">
            با <a href="#" className="terms-link">قوانین و مقررات</a> کنکورینو موافقم.
          </label>
          {errors.acceptTerms && (
            <span className="text-danger text-xs mt-1 d-block fw-medium">{errors.acceptTerms}</span>
          )}
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
              <FaUserPlus /> ثبت‌نام
            </>
          )}
        </button>
      </form>

      {/* لینک ورود */}
      <div className="auth-footer text-center mt-4 pt-3 border-top border-secondary-subtle">
        <p className="mb-0 text-muted">
          قبلاً ثبت‌نام کرده‌اید؟{' '}
          <Link to="/login" className="login-link fw-bold">
            وارد شوید
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
