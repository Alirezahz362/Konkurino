import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* ستون ۱: درباره کنکورینو */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand mb-3">
              <h3 className="brand-title">کنکورینو <span>.</span></h3>
              <p className="brand-desc">
                پلتفرم جامع آموزش و مشاوره کنکور سراسری. همراه شما از پایه تا رتبه برتر شدن در کنکور با برترین اساتید کشور.
              </p>
            </div>
            <FooterSocials />
          </div>

          {/* ستون ۲: لینک‌های سریع */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">دسترسی سریع</h5>
            <ul className="footer-links">
              <li><a href="#home">صفحه اصلی</a></li>
              <li><a href="#courses">دوره‌های آموزشی</a></li>
              <li><a href="#team">اساتید و مشاوران</a></li>
              <li><a href="#about">درباره کنکورینو</a></li>
              <li><a href="#contact">تماس با ما</a></li>
            </ul>
          </div>

          {/* ستون ۳: رشته‌های کنکور */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">دسته کنکور</h5>
            <ul className="footer-links">
              <li><a href="#tajrobi">کنکور تجربی</a></li>
              <li><a href="#math">کنکور ریاضی</a></li>
              <li><a href="#humanities">کنکور انسانی</a></li>
              <li><a href="#final-exams">امتحانات نهایی</a></li>
              <li><a href="#counseling">مشاوره و برنامه‌ریزی</a></li>
            </ul>
          </div>

          {/* ستون ۴: خبرنامه و ارتباط */}
          <div className="col-lg-4 col-md-6">
            <FooterNewsletter />
            <div className="footer-contact mt-3">
              <p><FaPhoneAlt className="me-2 text-secondary" /> پشتیبانی: ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p><FaEnvelope className="me-2 text-secondary" /> ایمیل: info@konkurino.ir</p>
            </div>
          </div>
        </div>

        {/* خط جداکننده و کپی رایت */}
        <div className="footer-bottom text-center py-3 border-top border-secondary-subtle">
          <p className="mb-0 text-muted">
            تمامی حقوق مادی و معنوی این وب‌سایت متعلق به <strong>Konkurino</strong> می‌باشد. © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
