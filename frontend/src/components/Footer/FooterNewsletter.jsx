import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const FooterNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("ایمیل شما با موفقیت در خبرنامه ثبت شد.");
      setEmail("");
    }
  };

  return (
    <div className="footer-newsletter">
      <h5>عضویت در خبرنامه کنکورینو</h5>
      <p>آخرین جزوات رایگان، اخبار کنکور و تحلیل آزمون‌ها را در ایمیل خود دریافت کنید.</p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="آدرس ایمیل خود را وارد کنید..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" aria-label="عضویت">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
