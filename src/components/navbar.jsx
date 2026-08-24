import { useState } from "react";

function Navbar({ activePage, setPage, isLoggedIn }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const goToPage = (page) => {
    setPage(page);
    setMobileOpen(false);
    setShowDropdown(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg border-bottom ${
        isLoggedIn ? "bg-success navbar-dark" : "bg-light"
      }`}
    >
      <div className="container-fluid">
        {/* LOGGA */}
        <button
          type="button"
          className="navbar-brand btn btn-link text-decoration-none"
          onClick={() => goToPage("home")}
          style={{
            fontFamily: '"Fontdiner Swanky", serif',
            fontSize: "1.8rem",
            color: isLoggedIn ? "white" : "#198754",
          }}
        >
          Klimatinfo
        </button>

        {/* HAMBURGER */}
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Öppna meny"
        >
          <span
            style={{
              fontSize: "1.5rem",
              color: isLoggedIn ? "white" : "#198754",
            }}
          >
            ☰
          </span>
        </button>

        {/* MENY */}
        <div
          className={`navbar-collapse ${
            mobileOpen ? "d-block" : "collapse"
          }`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {/* START */}
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-link nav-link"
                onClick={() => goToPage("home")}
                style={{
                  color: isLoggedIn ? "white" : "#198754",
                  textDecoration:
                    activePage === "home" ? "underline" : "none",
                  textUnderlineOffset: "6px",
                  fontSize: "1.2rem",
                }}
              >
                Start
              </button>
            </li>

            {/* UTVECKLING */}
            <li className="nav-item position-relative">
              <button
                type="button"
                className="btn btn-link nav-link"
                onClick={() => setShowDropdown((prev) => !prev)}
                style={{
                  color: isLoggedIn ? "white" : "#198754",
                  textDecoration:
                    activePage === "development" ||
                    activePage === "co2" ||
                    activePage === "temperature" ||
                    activePage === "glaciers"
                      ? "underline"
                      : "none",
                  textUnderlineOffset: "6px",
                  fontSize: "1.2rem",
                }}
              >
                Utveckling ▼
              </button>

              {showDropdown && (
                <div
                  className={`position-absolute end-0 mt-2 p-2 rounded shadow ${
                    isLoggedIn ? "bg-success" : "bg-light"
                  }`}
                  style={{
                    minWidth: "220px",
                    zIndex: 1000,
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none text-start w-100"
                    onClick={() => goToPage("co2")}
                    style={{
                      color: isLoggedIn ? "white" : "#198754",
                    }}
                  >
                    Koldioxidutsläpp
                  </button>

                  <button
                    type="button"
                    className="btn btn-link text-decoration-none text-start w-100"
                    onClick={() => goToPage("temperature")}
                    style={{
                      color: isLoggedIn ? "white" : "#198754",
                    }}
                  >
                    Globala temperaturer
                  </button>

                  <button
                    type="button"
                    className="btn btn-link text-decoration-none text-start w-100"
                    onClick={() => goToPage("glaciers")}
                    style={{
                      color: isLoggedIn ? "white" : "#198754",
                    }}
                  >
                    Glaciärstorlekar
                  </button>
                </div>
              )}
            </li>

            {/* LOGIN / PROFIL */}
            {isLoggedIn ? (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-link nav-link"
                  onClick={() => goToPage("profile")}
                  style={{
                    color: "white",
                    textDecoration:
                      activePage === "profile" ? "underline" : "none",
                    textUnderlineOffset: "6px",
                    fontSize: "1.2rem",
                  }}
                >
                  Profil
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-link nav-link"
                  onClick={() => goToPage("login")}
                  style={{
                    color: "#198754",
                    textDecoration:
                      activePage === "login" ? "underline" : "none",
                    textUnderlineOffset: "6px",
                    fontSize: "1.2rem",
                  }}
                >
                  Logga in
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;