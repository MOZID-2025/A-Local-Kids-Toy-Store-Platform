import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1280px] mx-auto footer sm:footer-horizontal bg-[#111827] text-white p-6 w-full">
      <nav>
        <h6 className="footer-title">Important Links</h6>
        <a className="link link-hover">terms and conditions</a>
        <a className="link link-hover">privacy policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Others pages</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">SOCIAL</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaInstagramSquare />
          </a>
          <a>
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
