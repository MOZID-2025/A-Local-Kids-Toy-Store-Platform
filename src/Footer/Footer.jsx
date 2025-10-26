import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white w-full">
      <div className="max-w-[1280px] mx-auto p-6 footer sm:footer-horizontal">
        <nav>
          <h6 className="footer-title">Important Links</h6>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>

        <nav>
          <h6 className="footer-title">Other Pages</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Kit</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
