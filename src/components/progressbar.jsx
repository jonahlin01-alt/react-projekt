function ProgressBar({ setPage }) {
  const goToProfile = () => {
    setPage?.("profile");
  };

  return (
    <section
      className="rounded-3 p-3 p-md-4"
      style={{
        backgroundColor: "#e8f7df",
      }}
    >
      <div className="row align-items-center g-3">
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
            <button
              type="button"
              onClick={goToProfile}
              aria-label="Gå till profilsidan"
              className="me-md-3"
              style={{
                background: "none",
                border: "none",
                padding: 0,
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

            <div>
              <h2 className="mt-2 mt-md-0 mb-1">
                Välkommen tillbaka Anna!
              </h2>

              <p className="mb-0">
                Läs igenom en ny lektion för att nå dagens mål!
              </p>
            </div>
          </div>

          <div
            className="d-md-none mx-auto my-3"
            style={{
              width: "100px",
              height: "1px",
              backgroundColor: "#174d08",
            }}
          />
        </div>

        <div className="col-12 col-md-6 text-center text-md-start">
          <p className="mb-2">
            2 av 3 lektioner genomförda!
          </p>

          <div
            className="progress"
            style={{
              height: "20px",
              backgroundColor: "#fff1d4",
              border: "1px solid #8d815f",
              borderRadius: "8px",
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
  );
}

export default ProgressBar;