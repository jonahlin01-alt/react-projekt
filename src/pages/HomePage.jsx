function HomePage({ setPage, onLogout }) {
  const cards = [
    {
      image: "/ella-ivanescu-JbfhNrpQ_dw-unsplash.jpg",
      alt: "Illustration av en fabrik med rök och CO₂-symbol som representerar koldioxidutsläpp",
      text: "Koldioxidutsläppen har ökat genom förbränning av fossila bränslen. Detta påverkar vår atmosfär och genom det även vårt klimat.",
      page: "co2",
    },
    {
      image: "/javier-miranda-7bnvNN3R_eo-unsplash.jpg",
      alt: "Illustration av en jordglob, uppåtgående pilar och termometer som representerar globala temperaturer",
      text: "Vi lever på ett sätt som påverkar jordens temperatur. Den globala temperaturen har ökat under många år, delvis på grund av våra utsläpp.",
      page: "temperature",
    },
    {
      image: "/magdalena-kula-manchee-qpyZIffH78I-unsplash.jpg",
      alt: "Illustration av en smältande glaciär och nedåtpil som representerar minskande glaciärstorlekar",
      text: "Jordens glaciärer påverkas i stor grad av jordens temperaturer. Under de senaste åren har glaciärernas storlekar minskat, och havsnivåer ökat.",
      page: "glaciers",
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#fffdf8",
        minHeight: "100vh",
      }}
    >
      <div className="d-md-none px-3 py-4">
        <div
          className="mx-auto"
          style={{
            maxWidth: "390px",
          }}
        >
          <section
            className="rounded-3 text-center px-3 py-3 mb-3"
            style={{
              backgroundColor: "#e8f7df",
            }}
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
              style={{
                width: "70px",
                height: "70px",
                backgroundColor: "#f4d7a1",
                border: "1px solid #8a6c3a",
                fontSize: "38px",
              }}
            >
              👩
            </div>

            <h2
              className="mb-2"
              style={{
                fontSize: "1rem",
                fontWeight: 400,
              }}
            >
              Välkommen tillbaka Anna!
            </h2>

            <p
              className="mb-3"
              style={{
                fontSize: "0.68rem",
              }}
            >
              Läs igenom en ny lektion för att nå dagens mål!
            </p>

            <div
              className="mx-auto mb-3"
              style={{
                width: "100px",
                height: "1px",
                backgroundColor: "#174d08",
              }}
            />

            <p
              className="mb-2"
              style={{
                fontSize: "0.9rem",
              }}
            >
              2 av 3 lektioner genomförda!
            </p>

            <div
              className="progress"
              style={{
                height: "19px",
                borderRadius: "7px",
                backgroundColor: "#fff1d4",
                border: "1px solid #8d815f",
              }}
            >
              <div
                className="progress-bar"
                role="progressbar"
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

          <div className="d-flex flex-column gap-3">
            {cards.map((card) => (
              <article
                key={card.page}
                className="rounded-3 p-3"
                style={{
                  backgroundColor: "#fbefd9",
                }}
              >
                <div className="row g-2 align-items-center">
                  <div className="col-5 text-center">
                    <img
                      src={card.image}
                      alt={card.alt}
                      style={{
                        width: "100%",
                        height: "115px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="col-7">
                    <p
                      className="text-center mb-0"
                      style={{
                        fontSize: "0.7rem",
                        lineHeight: "1.2",
                      }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>

                <div className="text-center mt-1">
                  <button
                    type="button"
                    onClick={() => setPage(card.page)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#487c2d",
                      padding: 0,
                      fontSize: "0.65rem",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    Läs mer...
                  </button>
                </div>
              </article>
            ))}
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
                fontSize: "0.8rem",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Logga ut
            </button>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block">
        <div
          className="container py-4"
          style={{
            maxWidth: "1100px",
          }}
        >
          <section
            className="rounded-3 p-4 mb-4"
            style={{
              backgroundColor: "#e8f7df",
            }}
          >
            <div className="row align-items-center g-3">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#f4d7a1",
                      border: "1px solid #8a6c3a",
                      fontSize: "34px",
                    }}
                  >
                    👩
                  </div>

                  <div>
                    <h2
                      className="mb-1"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
                      }}
                    >
                      Välkommen tillbaka Anna!
                    </h2>

                    <p
                      className="mb-0"
                      style={{
                        fontSize: "0.75rem",
                      }}
                    >
                      Läs igenom en ny lektion för att nå dagens mål!
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
                    height: "14px",
                    backgroundColor: "#f6ead5",
                    border: "1px solid #a99b7c",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
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

          <div className="row g-4">
            {cards.map((card) => (
              <div
                className="col-md-4 d-flex"
                key={card.page}
              >
                <article
                  className="w-100 rounded-3 p-3 text-center d-flex flex-column"
                  style={{
                    backgroundColor: "#fbefd9",
                    minHeight: "380px",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                    }}
                  />

                  <p
                    className="mt-3 mb-3"
                    style={{
                      fontSize: "0.78rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {card.text}
                  </p>

                  <button
                    type="button"
                    onClick={() => setPage(card.page)}
                    className="mt-auto"
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      color: "#28651d",
                      fontSize: "0.78rem",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    Läs mer...
                  </button>
                </article>
              </div>
            ))}
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
              Logga ut
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;