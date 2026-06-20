import PagesDropdown from "./PagesDropdown";
import { LOGO_DARK, LOGO_LIGHT, NAV_LINKS } from "./navData";

function TrialButton() {
  return (
    <div className="position-relative---z-index-1">
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
  return (
    <div
      data-animation="default"
      className="header w-nav"
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      data-w-id="7a7443a6-35f8-b340-e299-05abf0e89308"
      role="banner"
      data-duration="300"
    >
      <div className="container-default w-container">
        <div className="header-content">
          <a href="#home" className="header-logo w-nav-brand">
            <img
              src={LOGO_LIGHT}
              loading="eager"
              width={194}
              height={29}
              alt="CloudWhisper"
              className="nav-logo"
            />
            <img
              src={LOGO_DARK}
              loading="eager"
              width={194}
              height={29}
              alt=""
              className="nav-logo-dark-mode"
            />
          </a>

          <div className="header-right-side v1">
            <nav role="navigation" className="nav-menu w-nav-menu">
              <ul role="list" className="list-nav-menu w-list-unstyled">
                {NAV_LINKS.slice(0, 3).map((link) => (
                  <li key={link.label} className="link-nav-item">
                    <a href={link.href} className="nav-link w-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}

                <li className="link-nav-item">
                  <PagesDropdown />
                </li>

                <li className="link-nav-item">
                  <a href="#pricing" className="nav-link w-nav-link">
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

            <div className="hamburger-menu w-nav-button" aria-label="menu" role="button" tabIndex={0}>
              <div className="hamburger-menu-flex">
                <div className="hamburger-menu-line top" />
                <div className="hamburger-menu-line bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
