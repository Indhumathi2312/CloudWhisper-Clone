import { MAIN_PAGES, UTILITY_PAGES, WEBFLOW_ICON } from "./navData";

export default function PagesDropdown({ isOpen, onToggle, onNavigate, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`header-dropdown w-dropdown ${isOpen ? "w--open" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        className={`dropdown-toggle w-dropdown-toggle ${isOpen ? "w--open" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div>Pages</div>
        <div className="icon-font-rounded dropdown-icon"></div>
      </button>
      <nav className={`dropdown-content-wrapper w-dropdown-list ${isOpen ? "w--open" : ""}`}>
        <div className="card dropdown-content-card">
          <div className="w-layout-grid dropdown-pages-grid">
            <div>
              <div className="dropdown-title">Main pages</div>
              <div className="w-layout-grid main-pages-grid">
                <div className="w-layout-grid pages-column">
                  {MAIN_PAGES.slice(0, 6).map(([label, href]) => (
                    <a key={label} href={href} className="dropdown-link" onClick={onNavigate}>
                      {label}
                    </a>
                  ))}
                </div>
                <div className="w-layout-grid pages-column">
                  {MAIN_PAGES.slice(6, 12).map(([label, href]) => (
                    <a key={label} href={href} className="dropdown-link" onClick={onNavigate}>
                      {label}
                    </a>
                  ))}
                </div>
                <div className="w-layout-grid pages-column">
                  {MAIN_PAGES.slice(12, 18).map(([label, href]) => (
                    <a key={label} href={href} className="dropdown-link" onClick={onNavigate}>
                      {label}
                    </a>
                  ))}
                </div>
                <div className="w-layout-grid pages-column">
                  {MAIN_PAGES.slice(18).map(([label, href]) => (
                    <a key={label} href={href} className="dropdown-link" onClick={onNavigate}>
                      {label}
                    </a>
                  ))}
                  <a
                    href="https://www.brixtemplates.com/more-webflow-templates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-link highlighted w-inline-block"
                  >
                    <img src={WEBFLOW_ICON} loading="eager" alt="Webflow" className="dropdown-link-icon" />
                    <div>More Webflow Templates</div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="dropdown-title">Utility pages</div>
              <div className="w-layout-grid pages-column">
                {UTILITY_PAGES.map((label) => (
                  <a key={label} href="#" className="dropdown-link" onClick={onNavigate}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
