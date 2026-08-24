

function Navbar({ activePage, setPage, isLoggedIn }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = isLoggedIn
    ? [
        { label: "Start", value: "home" },
        { label: "Utveckling", value: "development" },
        { label: "Profil", value: "profile" },
      ]
    : [
        { label: "Start", value: "home" },
        { label: "Utveckling", value: "development" },
        { label: "Logga in", value: "login" },
      ];

  const navbarBgClass = isLoggedIn ? "bg-success" : "bg-light";
  const textColor = isLoggedIn ? "white" : "green";

  const handleNavClick = (value) => {
    if (value === "development") {
      setShowDropdown((prev) => !prev);
      return;
    }

    setShowDropdown(false);
    setMobileOpen(false);

    if (setPage) {
      setPage(value);
    }
  };

  const handleDropdownClick = (value) => {
    setShowDropdown(false);
    setMobileOpen(false);

    if (setPage) {
      setPage(value);
    }
  };

  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
    setShowDropdown(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${navbarBgClass} border-bottom custom-navbar`}
    >
      <div className="container-fluid custom-navbar-container">
        <button
          type="button"
          className="navbar-brand btn btn-link text-decoration-none p-0"
          onClick={() => {
            setMobileOpen(false);
            setShowDropdown(false);
            setPage && setPage("home");
          }}
          style={{
            fontFamily: '"Fontdiner Swanky", serif',
            fontSize: "1.55rem",
            color: textColor,
          }}
        >
          Klimatinfo
        </button>

        <button
          className="navbar-toggler border-0"
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={handleMobileToggle}
        >
          {mobileOpen ? (
            <span className="text-white fs-2">×</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div
          className={`navbar-collapse ${
            mobileOpen ? "show" : "collapse"
          } mobile-navbar-collapse`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row align-items-lg-center position-relative gap-2 gap-lg-0">
            {navItems.map((item, index) => (
              <li
                key={item.value}
                className="nav-item d-flex align-items-center position-relative"
              >
                <button
                  type="button"
                  className="btn btn-link nav-link p-0"
                  onClick={() => handleNavClick(item.value)}
                  style={{
                    color: textColor,
                    textDecoration:
                      activePage === item.value ? "underline" : "none",
                    textDecorationColor: textColor,
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "6px",
                    fontSize: "1.4rem",
                  }}
                >
                  {item.label}
                </button>

                {item.value === "development" && showDropdown && (
                  <div
                    className={`mobile-development-dropdown ${
                      isLoggedIn ? "bg-success" : "bg-light"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleDropdownClick("co2")}
                      style={{ color: textColor }}
                    >
                      Koldioxidutsläpp
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDropdownClick("temperature")}
                      style={{ color: textColor }}
                    >
                      Globala temperaturer
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDropdownClick("glaciers")}
                      style={{ color: textColor }}
                    >
                      Glaciärstorlekar
                    </button>
                  </div>
                )}

                {index < navItems.length - 1 && (
                  <span
                    className="d-none d-lg-inline"
                    style={{
                      color: textColor,
                      margin: "0 8px",
                    }}
                  >
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;