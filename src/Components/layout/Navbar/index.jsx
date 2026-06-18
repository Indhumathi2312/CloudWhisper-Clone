"use client";

import { useCallback, useEffect, useState } from "react";
import PagesDropdown from "./PagesDropdown";
import { LOGO_DARK, LOGO_LIGHT, NAV_LINKS } from "./navData";

function TrialButton({ className = "" }) {
  return (
    <div className={`position-relative---z-index-1 ${className}`}>
      <a href="#pricing" className="tertiary-button w-inline-block">
        <div className="button-content-flex">
          <div>Start free trial</div>
        </div>
      </a>
      <div className="button-bg-gradient" />
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 991);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setPagesOpen(false);
  }, []);

  const togglePages = useCallback(() => {
    if (window.innerWidth <= 991) {
      setPagesOpen((open) => !open);
    }
  }, []);

  const openPagesDesktop = useCallback(() => {
    if (window.innerWidth > 991) {
      setPagesOpen(true);
    }
  }, []);

  const closePagesDesktop = useCallback(() => {
    if (window.innerWidth > 991) {
      setPagesOpen(false);
    }
  }, []);

  const toggleMenu = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen((open) => {
      if (open) setPagesOpen(false);
      return !open;
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 991) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  return (
    <header
      className={`header site-header${menuOpen ? " is-menu-open" : ""}`}
      role="banner"
    >
      <div className="container-default w-container">
        <div className="header-content">
          <a href="#home" className="header-logo w-nav-brand" onClick={closeMenu}>
            <img src={LOGO_LIGHT} loading="eager" width={194} height={29} alt="CloudWhisper" className="nav-logo" />
            <img src={LOGO_DARK} loading="eager" width={194} height={29} alt="" className="nav-logo-dark-mode" />
          </a>

          <div className="header-right-side v1">
            <nav
              id="site-mobile-nav"
              role="navigation"
              className="nav-menu w-nav-menu site-nav-menu"
              aria-hidden={isMobile ? !menuOpen : undefined}
            >
              <ul role="list" className="list-nav-menu w-list-unstyled">
                {NAV_LINKS.slice(0, 3).map((link) => (
                  <li key={link.label} className="link-nav-item">
                    <a href={link.href} className="nav-link w-nav-link" onClick={closeMenu}>
                      {link.label}
                    </a>
                  </li>
                ))}

                <li className="link-nav-item">
                  <PagesDropdown
                    isOpen={pagesOpen}
                    onToggle={togglePages}
                    onNavigate={closeMenu}
                    onMouseEnter={openPagesDesktop}
                    onMouseLeave={closePagesDesktop}
                  />
                </li>

                <li className="link-nav-item">
                  <a href="#pricing" className="nav-link w-nav-link" onClick={closeMenu}>
                    Pricing
                  </a>
                </li>

                <li className="link-nav-item show-on-mbl">
                  <TrialButton />
                </li>
              </ul>
            </nav>

            <div className="hidden-on-mobile-landscape">
              <TrialButton />
            </div>

            <button
              type="button"
              className={`hamburger-menu menu-toggle${menuOpen ? " is-open" : ""}`}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="site-mobile-nav"
            >
              <div className="hamburger-menu-flex">
                <div className="hamburger-menu-line top" />
                <div className="hamburger-menu-line bottom" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`site-nav-backdrop${menuOpen ? " is-visible" : ""}`}
        onClick={closeMenu}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
      />
    </header>
  );
}
