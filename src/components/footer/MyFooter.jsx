import React from 'react';
import './MyFooter.scss';
import Image from "../../assets/image/kasa_white.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <img src={Image} alt="" />
        <p>© 2020 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer;
