import React, { useState, useEffect, createRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import MobileNavigationOverlay from "../MobileNavigationOverlay/MobileNavigationOverlay";

import MenuHamburgerWhiteIcon from "../../images/icons/menu-white_icon.svg";
import MenuHamburgerBlackIcon from "../../images/icons/menu-black_icon.svg";
import MenuCloseIcon from "../../images/icons/menu-close_icon.svg";
import MenuLogoutWhiteIcon from "../../images/icons/menu-logout-white_icon.svg";
import MenuLogoutBlackIcon from "../../images/icons/menu-logout-black_icon.svg";

const Header = ({
  loggedIn,
  currentUser,
  onSignInClick,
  setIsNewsCardListOpen,
  setSearchKeyword,
  onSavedArticlesPage,
  onLogOut,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(false);
  const [hamburgerShow, setHamburgerShow] = useState();
  const [logoutShowIcon, setLogoutShowIcon] = useState();

  let overlayRef = createRef();

  useEffect(() => {
    function checkWidth() {
      const windowWidth = window.matchMedia("(max-width: 520px)");

      if (windowWidth.matches) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  });

  useEffect(() => {
    if (!isMenuOpen && onSavedArticlesPage) {
      setHamburgerShow(MenuHamburgerBlackIcon);
    } else if (!isMenuOpen && !onSavedArticlesPage) {
      setHamburgerShow(MenuHamburgerWhiteIcon);
    } else if (isMenuOpen) {
      setHamburgerShow(MenuCloseIcon);
    }
  }, [isMenuOpen, onSavedArticlesPage]);

  useEffect(() => {
    if (mobileWidth) {
      setLogoutShowIcon(MenuLogoutWhiteIcon);
    } else if (onSavedArticlesPage) {
      setLogoutShowIcon(MenuLogoutBlackIcon);
    } else if (!onSavedArticlesPage) {
      setLogoutShowIcon(MenuLogoutWhiteIcon);
    }
  }, [mobileWidth, onSavedArticlesPage]);

  useEffect((evt) => {
    window.addEventListener("click", handleCloseFromOverlay);
    return () => window.removeEventListener("click", handleCloseFromOverlay);
  });

  function handleCloseFromOverlay(evt) {
    if (overlayRef.current && !overlayRef.current.contains(evt.target)) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    const handleCloseByEscape = (evt) => {
      if (evt.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleCloseByEscape);
    return () => document.removeEventListener("keydown", handleCloseByEscape);
  }, []);

  function onHamburgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleNavigationClick() {
    setIsMenuOpen(false);
    setIsNewsCardListOpen(false);
    setSearchKeyword("");
  }

  function handleLogButtonClick() {
    onSignInClick();
    handleNavigationClick();
  }

  function logOut() {
    handleNavigationClick();
    onLogOut();
  }

  return loggedIn ? (
    <header
      className={`header ${
        isMenuOpen ? "header_mobile-menu_open" : "header_mobile-menu_closed"
      }`}
      ref={overlayRef}
    >
      <NavLink
        className={`header__logo ${
          onSavedArticlesPage && "header__logo_saved-articles"
        } ${isMenuOpen && "header__logo_menu_open"}`}
        exact
        to="/"
        onClick={handleNavigationClick}
      >
        NewsExplorer
      </NavLink>
      <img
        className="header__menu-icon"
        alt="Menu Icon"
        src={hamburgerShow}
        onClick={onHamburgerClick}
      />
      <nav
        className={`header__navigation ${
          mobileWidth && isMenuOpen
            ? "header__navigation_type_mobile_active-logged-in"
            : "header__navigation_type_mobile_inactive"
        }`}
      >
        <MobileNavigationOverlay mobileWidth={mobileWidth}>
          <NavLink
            className={`header__link-homepage ${
              onSavedArticlesPage && "header_color_black"
            }`}
            activeClassName={
              onSavedArticlesPage
                ? "header__active_color_black"
                : "header__active_color_white"
            }
            exact
            to="/"
            onClick={handleNavigationClick}
          >
            Home
          </NavLink>
          <NavLink
            className={`header__link-saved-articles ${
              onSavedArticlesPage && "header_color_black"
            }`}
            activeClassName={
              onSavedArticlesPage
                ? "header__active_color_black"
                : "header__active_color_white"
            }
            to="/saved-articles"
            onClick={handleNavigationClick}
          >
            Saved articles
          </NavLink>
          <NavLink
            className={`header__log-button header__signout-button header__log-button_logged-in ${
              onSavedArticlesPage && "header__log-button_saved-articles"
            }`}
            to=""
            onClick={logOut}
          >
            <p className="header__log-button-username">{currentUser?.name}</p>
            <img
              className="header__log-button-logout-icon"
              src={logoutShowIcon}
              alt="Logout Icon"
            />
          </NavLink>
        </MobileNavigationOverlay>
      </nav>
    </header>
  ) : (
    <header
      className={`header ${
        isMenuOpen ? "header_mobile-menu_open" : "header_mobile-menu_closed"
      }`}
      ref={overlayRef}
    >
      <NavLink
        className="header__logo"
        exact
        to="/"
        onClick={handleNavigationClick}
      >
        NewsExplorer
      </NavLink>
      <img
        className="header__menu-icon"
        alt="Menu icon"
        src={hamburgerShow}
        onClick={onHamburgerClick}
      />
      <div
        className={`header__navigation ${
          mobileWidth && isMenuOpen
            ? "header__navigation_type_mobile_active-logged-out"
            : "header__navigation_type_mobile_inactive"
        }`}
      >
        <MobileNavigationOverlay mobileWidth={mobileWidth}>
          <NavLink
            className="header__link-homepage"
            activeClassName="header__active_color_white"
            exact
            to="/"
            onClick={handleNavigationClick}
          >
            Home
          </NavLink>
          <NavLink
            className={
              "header__log-button header__signin-button header__log-button_logged-out"
            }
            to=""
            onClick={handleLogButtonClick}
          >
            Sign In
          </NavLink>
        </MobileNavigationOverlay>
      </div>
    </header>
  );
};

export default Header;
