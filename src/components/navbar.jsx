import { useState } from "react";

function Navbar({ activePage, setPage, isLoggedIn }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navBackground = isLoggedIn ? "#164d05" : "#ffffff";
  const navColor = isLoggedIn ? "#ffffff" : "#164d05";

  const goToPage = (page) => {
    setPage(page);
    setMobileOpen(false);
    setShowDropdown(false);
  };

  const developmentActive =
    activePage === "development" ||
    activePage === "co2" ||
    activePage === "temperature" ||
    activePage === "glaciers";

  const desktopNavStyle = (isActive) => ({
    color: navColor,
    fontSize: "1.05rem",
    textDecoration: "none",
    border: "none",
    borderBottom: isActive
      ? `2px solid ${navColor}`
      : "2px solid transparent",
    borderRadius: 0,
    padding: "4px 6px 0",
    background: "none",
  });

  const mobileMainStyle = (isActive) => ({
    color: navColor,
    fontSize: "1.25rem",
    textDecoration: "none",
    border: "none",
    borderBottom: isActive
      ? `2px solid ${navColor}`
      : "2px solid transparent",
    borderRadius: 0,
    padding: "2px 0",
    background: "none",
    width: "fit-content",
    textAlign: "left",
  });

  const mobileSubStyle = (isActive) => ({
    color: navColor,
    fontSize: "0.95rem",
    textDecoration: isActive ? "underline" : "none",
    textUnderlineOffset: "3px",
    border: "none",
    padding: "3px 0",
    background: "none",
    textAlign: "left",
  });

  return (
    <>
      <nav
        className="d-none d-lg-block"
        style={{
          backgroundColor: navBackground,
          position: "relative",
          zIndex: 2000,
          borderBottom: isLoggedIn
            ? "none"
            : "1px solid #e5e5e5",
        }}
      >
        <div
          className="container-fluid d-flex align-items-center"
          style={{
            minHeight: "58px",
          }}
        >
          <button
            type="button"
            onClick={() => goToPage("home")}
            style={{
              fontFamily: '"Fontdiner Swanky", serif',
              fontSize: "36px",
              color: navColor,
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            Klimatinfo
          </button>

          <div className="d-flex align-items-center ms-auto gap-2">
            <button
              type="button"
              onClick={() => goToPage("home")}
              style={desktopNavStyle(activePage === "home")}
            >
              Start
            </button>

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: navColor,
                opacity: 0.8,
              }}
            />

            <div className="position-relative">
              <button
                type="button"
                onClick={() => setShowDropdown((prev) => !prev)}
                style={desktopNavStyle(developmentActive)}
              >
                Utveckling
              </button>

              {showDropdown && (
                <div
                  className="position-absolute end-0 mt-2 rounded shadow p-2"
                  style={{
                    minWidth: "220px",
                    zIndex: 3000,
                    backgroundColor: navBackground,
                    border: isLoggedIn
                      ? "none"
                      : "1px solid #e5e5e5",
                  }}
                >
                  <button
                    type="button"
                    className="d-block w-100 text-start"
                    onClick={() => goToPage("co2")}
                    style={{
                      background: "none",
                      border: "none",
                      color: navColor,
                      padding: "8px 10px",
                    }}
                  >
                    Koldioxidutsläpp
                  </button>

                  <button
                    type="button"
                    className="d-block w-100 text-start"
                    onClick={() => goToPage("temperature")}
                    style={{
                      background: "none",
                      border: "none",
                      color: navColor,
                      padding: "8px 10px",
                    }}
                  >
                    Globala temperaturer
                  </button>

                  <button
                    type="button"
                    className="d-block w-100 text-start"
                    onClick={() => goToPage("glaciers")}
                    style={{
                      background: "none",
                      border: "none",
                      color: navColor,
                      padding: "8px 10px",
                    }}
                  >
                    Glaciärstorlekar
                  </button>
                </div>
              )}
            </div>

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: navColor,
                opacity: 0.8,
              }}
            />

            {isLoggedIn ? (
              <button
                type="button"
                onClick={() => goToPage("profile")}
                style={desktopNavStyle(activePage === "profile")}
              >
                Profil
              </button>
            ) : (
              <button
                type="button"
                onClick={() => goToPage("login")}
                style={desktopNavStyle(activePage === "login")}
              >
                Logga in
              </button>
            )}
          </div>
        </div>
      </nav>

      <nav
        className="d-lg-none"
        style={{
          position: "relative",
          zIndex: 2000,
        }}
      >
        <div
          className="d-flex align-items-center justify-content-between px-3"
          style={{
            height: "58px",
            backgroundColor: navBackground,
            borderBottom: isLoggedIn
              ? "none"
              : "1px solid #e5e5e5",
          }}
        >
          <button
            type="button"
            onClick={() => goToPage("home")}
            style={{
              fontFamily: '"Fontdiner Swanky", serif',
              fontSize: "1.55rem",
              color: navColor,
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            Klimatinfo
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
            style={{
              width: "40px",
              height: "40px",
              background: "none",
              border: "none",
              color: navColor,
              padding: 0,
              position: "relative",
            }}
          >
            {mobileOpen ? (
              <>
                <span
                  style={{
                    position: "absolute",
                    width: "25px",
                    height: "1px",
                    backgroundColor: navColor,
                    left: "7px",
                    top: "19px",
                    transform: "rotate(45deg)",
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    width: "25px",
                    height: "1px",
                    backgroundColor: navColor,
                    left: "7px",
                    top: "19px",
                    transform: "rotate(-45deg)",
                  }}
                />
              </>
            ) : (
              <span
                style={{
                  fontSize: "1.7rem",
                  lineHeight: 1,
                }}
              >
                ☰
              </span>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div
            style={{
              position: "absolute",
              top: "58px",
              right: 0,
              width: "72%",
              maxWidth: "280px",
              minHeight: "500px",
              backgroundColor: navBackground,
              padding: "25px 26px",
              zIndex: 3000,
              boxShadow: "0 8px 18px rgba(0, 0, 0, 0.15)",
              borderLeft: isLoggedIn
                ? "none"
                : "1px solid #e5e5e5",
              borderBottom: isLoggedIn
                ? "none"
                : "1px solid #e5e5e5",
            }}
          >
            <div className="d-flex flex-column align-items-start gap-4">
              <button
                type="button"
                onClick={() => goToPage("home")}
                style={mobileMainStyle(activePage === "home")}
              >
                Start
              </button>

              <div className="d-flex flex-column align-items-start">
                <button
                  type="button"
                  onClick={() => goToPage("development")}
                  style={mobileMainStyle(developmentActive)}
                >
                  Utveckling
                </button>

                <div
                  className="d-flex flex-column mt-2"
                  style={{
                    paddingLeft: "8px",
                    gap: "2px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => goToPage("co2")}
                    style={mobileSubStyle(activePage === "co2")}
                  >
                    Koldioxidutsläpp
                  </button>

                  <button
                    type="button"
                    onClick={() => goToPage("temperature")}
                    style={mobileSubStyle(activePage === "temperature")}
                  >
                    Globala temperaturer
                  </button>

                  <button
                    type="button"
                    onClick={() => goToPage("glaciers")}
                    style={mobileSubStyle(activePage === "glaciers")}
                  >
                    Glaciärstorlekar
                  </button>
                </div>
              </div>

              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => goToPage("profile")}
                  style={mobileMainStyle(activePage === "profile")}
                >
                  Profil
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => goToPage("login")}
                  style={mobileMainStyle(activePage === "login")}
                >
                  Logga in
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;