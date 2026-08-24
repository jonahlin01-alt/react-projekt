import { useState } from "react";

function Navbar({ activePage, setPage, isLoggedIn }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const backgroundColor = isLoggedIn ? "#164d05" : "#ffffff";
  const textColor = isLoggedIn ? "#ffffff" : "#164d05";

  const developmentPages = [
    { label: "Koldioxidutsläpp", page: "co2" },
    { label: "Globala temperaturer", page: "temperature" },
    { label: "Glaciärstorlekar", page: "glaciers" },
  ];

  const developmentActive = developmentPages.some(
    (item) => item.page === activePage
  );

  const goToPage = (page) => {
    setPage(page);
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const navLinkStyle = (active) => ({
    background: "none",
    border: "none",
    borderBottom: active
      ? `2px solid ${textColor}`
      : "2px solid transparent",
    color: textColor,
    padding: "2px 0",
    textDecoration: "none",
  });

  return (
    <nav
      style={{
        backgroundColor,
        color: textColor,
        position: "relative",
        zIndex: 10,
        borderBottom: isLoggedIn ? "none" : "1px solid #e5e5e5",
      }}
    >
      <div
        className="container-fluid d-flex align-items-center justify-content-between"
        style={{
          height: "58px",
          maxWidth: "1200px",
        }}
      >
        <button
          type="button"
          onClick={() => goToPage("home")}
          style={{
            background: "none",
            border: "none",
            color: textColor,
            fontFamily: '"Fontdiner Swanky", serif',
            fontSize: "1.6rem",
            padding: 0,
          }}
        >
          Klimatinfo
        </button>

        <div className="d-none d-lg-flex align-items-center gap-4">
          <button
            type="button"
            onClick={() => goToPage("home")}
            style={navLinkStyle(activePage === "home")}
          >
            Start
          </button>

          <span style={{ opacity: 0.7 }}>|</span>

          <div className="position-relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={navLinkStyle(developmentActive)}
            >
              Utveckling
            </button>

            {dropdownOpen && (
              <div
                className="position-absolute shadow rounded-2 py-2"
                style={{
                  top: "34px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "220px",
                  backgroundColor,
                }}
              >
                {developmentPages.map((item) => (
                  <button
                    key={item.page}
                    type="button"
                    onClick={() => goToPage(item.page)}
                    className="d-block w-100 text-start px-3 py-2"
                    style={{
                      background: "none",
                      border: "none",
                      color: textColor,
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span style={{ opacity: 0.7 }}>|</span>

          <button
            type="button"
            onClick={() =>
              goToPage(isLoggedIn ? "profile" : "login")
            }
            style={navLinkStyle(
              activePage === (isLoggedIn ? "profile" : "login")
            )}
          >
            {isLoggedIn ? "Profil" : "Logga in"}
          </button>
        </div>

        <button
          type="button"
          className="d-lg-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
          style={{
            background: "none",
            border: "none",
            color: textColor,
            fontSize: "1.7rem",
            width: "40px",
            height: "40px",
          }}
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="d-lg-none position-absolute end-0 p-4 shadow"
          style={{
            top: "58px",
            width: "72%",
            maxWidth: "280px",
            minHeight: "500px",
            backgroundColor,
          }}
        >
          <div className="d-flex flex-column align-items-start gap-4">
            <button
              type="button"
              onClick={() => goToPage("home")}
              style={navLinkStyle(activePage === "home")}
            >
              Start
            </button>

            <div>
              <span
                style={{
                  display: "inline-block",
                  borderBottom: developmentActive
                    ? `2px solid ${textColor}`
                    : "2px solid transparent",
                  fontSize: "1.1rem",
                  marginBottom: "8px",
                }}
              >
                Utveckling
              </span>

              <div className="d-flex flex-column align-items-start gap-1">
                {developmentPages.map((item) => (
                  <button
                    key={item.page}
                    type="button"
                    onClick={() => goToPage(item.page)}
                    style={{
                      background: "none",
                      border: "none",
                      color: textColor,
                      padding: "2px 0",
                      textDecoration:
                        activePage === item.page
                          ? "underline"
                          : "none",
                      textUnderlineOffset: "3px",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                goToPage(isLoggedIn ? "profile" : "login")
              }
              style={navLinkStyle(
                activePage === (isLoggedIn ? "profile" : "login")
              )}
            >
              {isLoggedIn ? "Profil" : "Logga in"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;