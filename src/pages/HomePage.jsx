function HomePage({ setPage, onLogout }) {
  const cards = [
    {
      title: "KOLDIOXIDUTSLÄPP",
      image: "/ella-ivanescu-JbfhNrpQ_dw-unsplash.jpg",
      alt: "Fabriker som släpper ut rök",
      text: "Koldioxidutsläppen har ökat genom förbränning av fossila bränslen. Detta påverkar vår atmosfär och genom det även vårt klimat.",
      page: "co2",
    },
    {
      title: "GLOBALA TEMPERATURER",
      image: "/javier-miranda-7bnvNN3R_eo-unsplash.jpg",
      alt: "Illustration av en uppvärmd jord",
      text: "Vi lever på ett sätt som påverkar jordens temperatur. Den globala temperaturen har ökat under många år, delvis på grund av våra utsläpp.",
      page: "temperature",
    },
    {
      title: "GLACIÄRSTORLEKAR",
      image: "/magdalena-kula-manchee-qpyZIffH78I-unsplash.jpg",
      alt: "Glaciär vid havet",
      text: "Jordens glaciärer påverkas i stor grad av jordens globala temperaturer. Under de senaste åren har glaciärerna minskat och havsnivån ökat.",
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
      <div
        className="container py-4"
        style={{
          maxWidth: "1100px",
        }}
      >
        {/* VÄLKOMSTRUTA */}
        <section
          className="rounded-3 p-3 p-md-4 mb-4"
          style={{
            backgroundColor: "#e8f7df",
          }}
        >
          <div className="row align-items-center g-3">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#f4d7a1",
                    border: "2px solid #b78b45",
                    fontSize: "34px",
                  }}
                >
                  👩
                </div>

                <div>
                  <h4
                    className="mb-1"
                    style={{
                      fontSize: "1.1rem",
                    }}
                  >
                    Välkommen tillbaka Anna!
                  </h4>

                  <p
                    className="mb-0"
                    style={{
                      fontSize: "0.75rem",
                      lineHeight: "1.4",
                    }}
                  >
                    Läs igenom en ny lektion för att
                    <br />
                    nå dagens mål!
                  </p>
                </div>
              </div>
            </div>

            {/* PROGRESS */}
            <div className="col-12 col-md-6">
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
                  aria-label="Lektionsframsteg"
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

        {/* INFORMATIONSKORT */}
        <div className="row g-4">
          {cards.map((card) => (
            <div
              className="col-12 col-md-4 d-flex"
              key={card.title}
            >
              <article
                className="w-100 rounded-3 overflow-hidden d-flex flex-column"
                style={{
                  backgroundColor: "#fbefd9",
                  minHeight: "390px",
                }}
              >
                <h2
                  className="fw-bold text-center px-3 pt-3 mb-3"
                  style={{
                    fontSize: "1rem",
                    color: "#3e4947",
                  }}
                >
                  {card.title}
                </h2>

                <img
                  src={card.image}
                  alt={card.alt}
                  style={{
                    width: "100%",
                    height: "165px",
                    objectFit: "cover",
                  }}
                />

                <div className="p-3 text-center d-flex flex-column flex-grow-1">
                  <p
                    className="mb-3"
                    style={{
                      fontSize: "0.78rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {card.text}
                  </p>

                  <button
                    type="button"
                    className="btn btn-link p-0 mt-auto"
                    onClick={() => setPage(card.page)}
                    style={{
                      color: "#28651d",
                      fontSize: "0.78rem",
                      textDecoration: "underline",
                    }}
                  >
                    Läs mer...
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* LOGGA UT */}
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
              cursor: "pointer",
            }}
          >
            Logga ut
          </button>
        </div>
      </div>
    </main>
  );
}

export default HomePage;