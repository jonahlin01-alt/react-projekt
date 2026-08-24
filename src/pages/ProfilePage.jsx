function ProfilePage({ onLogout, setPage }) {
  const completedLessons = [
    {
      image: "/koldioxidutsläpp.png",
      alt: "Illustration av koldioxidutsläpp från en fabrik med en CO₂-symbol",
      page: "co2",
    },
    {
      image: "/globalatempraturer.png",
      alt: "Illustration av jorden med stigande pilar och en termometer som visar globala temperaturer",
      page: "temperature",
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#fffdf8",
        minHeight: "100vh",
      }}
    >
      <div className="d-md-none px-3 py-3">
        <div
          className="mx-auto"
          style={{
            maxWidth: "390px",
          }}
        >
          <section
            className="rounded-3 text-center p-3 mb-3"
            style={{
              backgroundColor: "#e8f7df",
            }}
          >
            <img
              src="/AnnaAvatar.png"
              alt="Avatar för Anna"
              className="rounded-circle mx-auto mb-2"
              style={{
                width: "62px",
                height: "62px",
                objectFit: "cover",
                border: "1px solid #8a6c3a",
              }}
            />

            <p
              className="mb-2"
              style={{
                fontSize: "0.9rem",
              }}
            >
              Välkommen tillbaka Anna!
            </p>

            <p
              className="mb-4"
              style={{
                fontSize: "0.65rem",
              }}
            >
              Läs igenom en ny lektion för att nå dagens mål!
            </p>

            <p
              className="mb-2"
              style={{
                fontSize: "0.8rem",
              }}
            >
              2 av 3 lektioner genomförda!
            </p>

            <div
              className="progress"
              style={{
                height: "18px",
                borderRadius: "7px",
                backgroundColor: "#fff1d4",
                border: "1px solid #8d815f",
              }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="2 av 3 lektioner genomförda"
                aria-valuenow="67"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: "67%",
                  backgroundColor: "#174d08",
                }}
              />
            </div>
          </section>

          <section
            className="rounded-3 p-3 mb-3"
            style={{
              backgroundColor: "#fbefd9",
            }}
          >
            <div className="d-flex align-items-center">
              <span
                className="me-3"
                aria-hidden="true"
                style={{
                  fontSize: "2.1rem",
                }}
              >
                🏆
              </span>

              <div>
                <p
                  className="mb-1"
                  style={{
                    fontSize: "0.9rem",
                  }}
                >
                  #6 i din klass
                </p>

                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.9rem",
                  }}
                >
                  #20 i din skola
                </p>
              </div>
            </div>
          </section>

          <section
            className="rounded-3 position-relative overflow-hidden mb-3 d-flex align-items-center justify-content-center"
            style={{
              height: "190px",
              border: "2px solid #ff9f1c",
              backgroundColor: "#fbefd9",
            }}
          >
            <img
              src="/glaciärstorlekar.png"
              alt="Illustration av en glaciär med en nedåtgående pil som visar nästa lektion om glaciärstorlekar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />

            <button
              type="button"
              onClick={() => setPage("glaciers")}
              className="position-absolute top-50 start-50 translate-middle"
              style={{
                backgroundColor: "#fffdf8",
                border: "2px solid #ff9f1c",
                borderRadius: "5px",
                color: "#ff8c00",
                padding: "8px 14px",
                fontSize: "0.85rem",
                whiteSpace: "nowrap",
              }}
            >
              Påbörja nästa →
            </button>
          </section>

          {completedLessons.map((lesson) => (
            <section
              key={lesson.page}
              className="rounded-3 position-relative overflow-hidden mb-3 d-flex align-items-center justify-content-center"
              style={{
                height: "190px",
                border: "2px solid #174d08",
                backgroundColor: "#fbefd9",
              }}
            >
              <img
                src={lesson.image}
                alt={lesson.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

              <button
                type="button"
                onClick={() => setPage(lesson.page)}
                className="position-absolute top-50 start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center"
                aria-label="Öppna genomförd lektion"
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#e8f7df",
                  border: "3px solid #174d08",
                  color: "#174d08",
                  fontSize: "2.2rem",
                  lineHeight: 1,
                }}
              >
                ✓
              </button>
            </section>
          ))}

          <div className="text-center pt-1 pb-3">
            <button
              type="button"
              onClick={onLogout}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "#000",
                fontSize: "0.75rem",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Logga ut →
            </button>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block">
        <div
          className="container py-4"
          style={{
            maxWidth: "1200px",
          }}
        >
          <section
            className="rounded-3 px-4 py-3 mb-4"
            style={{
              backgroundColor: "#e8f7df",
            }}
          >
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img
                    src="/AnnaAvatar.png"
                    alt="Avatar för Anna"
                    className="rounded-circle me-3"
                    style={{
                      width: "74px",
                      height: "74px",
                      objectFit: "cover",
                      border: "1px solid #8a6c3a",
                    }}
                  />

                  <div>
                    <h2
                      className="mb-1"
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 400,
                      }}
                    >
                      Välkommen tillbaka Anna!
                    </h2>

                    <p
                      className="mb-0"
                      style={{
                        fontSize: "0.72rem",
                        lineHeight: "1.35",
                      }}
                    >
                      Läs igenom en ny lektion för att
                      <br />
                      nå dagens mål!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <p
                  className="mb-2"
                  style={{
                    fontSize: "0.95rem",
                  }}
                >
                  2 av 3 lektioner genomförda!
                </p>

                <div
                  className="progress"
                  style={{
                    height: "22px",
                    borderRadius: "8px",
                    backgroundColor: "#fff1d4",
                    border: "1px solid #8d815f",
                  }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-label="2 av 3 lektioner genomförda"
                    aria-valuenow="67"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                      width: "67%",
                      backgroundColor: "#174d08",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            className="rounded-3 px-4 py-3 mb-4"
            style={{
              backgroundColor: "#fbefd9",
              maxWidth: "860px",
              margin: "0 auto 1.5rem",
            }}
          >
            <div className="row align-items-center text-center">
              <div className="col-md-5">
                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.95rem",
                  }}
                >
                  #6 i din klass
                </p>
              </div>

              <div className="col-md-2">
                <div
                  aria-hidden="true"
                  style={{
                    fontSize: "3rem",
                    color: "#f5a623",
                    lineHeight: 1,
                  }}
                >
                  🏆
                </div>
              </div>

              <div className="col-md-5">
                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.95rem",
                  }}
                >
                  #20 i din skola
                </p>
              </div>
            </div>
          </section>

          <div className="row g-4 justify-content-center">
            {completedLessons.map((lesson) => (
              <div
                className="col-md-4 col-lg-3 d-flex"
                key={lesson.page}
              >
                <section
                  className="w-100 rounded-3 position-relative overflow-hidden d-flex align-items-center justify-content-center"
                  style={{
                    height: "190px",
                    border: "2px solid #174d08",
                    backgroundColor: "#fbefd9",
                  }}
                >
                  <img
                    src={lesson.image}
                    alt={lesson.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setPage(lesson.page)}
                    className="position-absolute top-50 start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center"
                    aria-label="Öppna genomförd lektion"
                    style={{
                      width: "78px",
                      height: "78px",
                      backgroundColor: "#e8f7df",
                      border: "4px solid #174d08",
                      color: "#174d08",
                      fontSize: "2.7rem",
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </button>
                </section>
              </div>
            ))}

            <div className="col-md-4 col-lg-3 d-flex">
              <section
                className="w-100 rounded-3 position-relative overflow-hidden d-flex align-items-center justify-content-center"
                style={{
                  height: "190px",
                  border: "2px solid #ff9f1c",
                  backgroundColor: "#fbefd9",
                }}
              >
                <img
                  src="/glaciärstorlekar.png"
                  alt="Illustration av en glaciär med en nedåtgående pil som visar nästa lektion om glaciärstorlekar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />

                <button
                  type="button"
                  onClick={() => setPage("glaciers")}
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    backgroundColor: "#fffdf8",
                    border: "2px solid #ff9f1c",
                    borderRadius: "6px",
                    color: "#ff9f1c",
                    padding: "10px 18px",
                    fontSize: "0.95rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Påbörja nästa →
                </button>
              </section>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={onLogout}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "#000",
                fontSize: "0.9rem",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Logga ut →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;