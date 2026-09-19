import React from "react";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterSocials = () => {
  return (
    <div className="footer-socials">
      <a href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram">
        <FaTelegram />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="Youtube">
        <FaYoutube />
      </a>
    </div>
  );
};

export default FooterSocials;
