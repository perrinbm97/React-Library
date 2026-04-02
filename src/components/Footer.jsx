import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom/cjs/react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="#">
            <figure className="footer__logo">
              <img src={Logo} className="footer__logo--img" alt="" />
            </figure>
          </a>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/books" className="footer__link">
              Books
            </Link>
            <Link to="/cart" className="footer__link">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2026 BMP</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
