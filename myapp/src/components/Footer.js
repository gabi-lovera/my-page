import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="fooContent">
          <h2 className="copy">
            <AiOutlineCopyright />
          </h2>
          <p>#2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
