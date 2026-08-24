function ProgressBar({ setPage }) {
  const goToProfile = () => {
    if (setPage) {
      setPage("profile");
    }
  };

  return (
    <section
      className="rounded-3 p-3 p-md-4"
      style={{
        backgroundColor: "#e8f7df",
      }}
    >
      <div className="d-md-none text-center">
        <button
          type="button"
          onClick={goToProfile}
          aria-label="Gå till profilsidan"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            borderRadius: "50%",
          }}
        >
          <img
            src="/AnnaAvatar.png"
            alt="Profilbild för Anna"
            className="rounded-circle"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </button>

        <h2
          className="mt-2 mb-2"
          style={{
            fontSize: "1rem",
            fontWeight: 400,
          }}
        >
          Välkommen tillbaka Anna!
        </h2>

        <p className="small mb-3">
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

        <p className="mb-2">
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

      <div className="d-none d-md-block">
        <div className="row align-items-center g-3">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <button
                type="button"
                onClick={goToProfile}
                aria-label="Gå till profilsidan"
                className="me-3"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  borderRadius: "50%",
                }}
              >
                <img
                  src="/AnnaAvatar.png"
                  alt="Profilbild för Anna"
                  className="rounded-circle"
                  style={{
                    width: "74px",
                    height: "74px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </button>

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
                    fontSize: "0.8rem",
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
                height: "20px",
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
      </div>
    </section>
  );
}

export default ProgressBar;