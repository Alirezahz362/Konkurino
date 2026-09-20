import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const AuthLayout = () => {
  return (
    <div className="auth-page py-5">
      {/* هاله‌های نوری پس‌زمینه مشترک */}
      <div className="auth-bg-glow glow-1"></div>
      <div className="auth-bg-glow glow-2"></div>

      <div className="container auth-container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            {/* دکمه بازگشت به صفحه اصلی مشترک */}
            <Link to="/" className="back-link mb-4 d-inline-flex align-items-center gap-2">
              <FaArrowRight /> بازگشت به صفحه اصلی
            </Link>

            {/* کارت شیشه‌ای مشترک فرم‌های احراز هویت */}
            <div className="auth-card">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
