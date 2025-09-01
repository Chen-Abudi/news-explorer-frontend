import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import LinkedInIcon from "../../images/icons/linkedin-icon.svg";
import InstagramIcon from "../../images/icons/instagram-icon.svg";
import GithubIcon from "../../images/icons/github-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; 2022 Supersite, Powered by News API
        </p>
        <nav className="footer__navigation">
          <div className="footer__links">
            <NavLink className="footer__link" to="/">
              Home
            </NavLink>
            <a
              className="footer__link"
              href="https://practicum.com/en-isr/"
              target="_blank"
              rel="noreferrer"
            >
              Practicum
            </a>
          </div>
          <div className="footer__social">
            <a
              href="https://github.com/Chen-Abudi"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__icon footer__icon_type_github"
                src={GithubIcon}
                alt="Github Icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/chen-abudi/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__icon footer__icon_type_linkedin"
                src={LinkedInIcon}
                alt="LinkedIn Icon"
              />
            </a>

            <a
              href="https://www.instagram.com/calibased23/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__icon footer__icon_type_instagram"
                src={InstagramIcon}
                alt="Instagram Icon"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
