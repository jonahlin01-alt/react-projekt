function ResultsBar() {
  return (
    <section
      className="rounded-3"
      style={{
        backgroundColor: "#fbefd9",
      }}
    >
      <div className="d-md-none p-3">
        <div className="d-flex align-items-center">
          <span
            className="me-3"
            aria-hidden="true"
            style={{
              fontSize: "2.4rem",
            }}
          >
            🏆
          </span>

          <div>
            <p className="mb-1">
              #6 i din klass
            </p>

            <p className="mb-0">
              #20 i din skola
            </p>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block px-4 py-3">
        <div className="row align-items-center text-center">
          <div className="col-5">
            <p
              className="mb-0"
              style={{
                fontSize: "0.95rem",
              }}
            >
              #6 i din klass
            </p>
          </div>

          <div className="col-2">
            <span
              aria-hidden="true"
              style={{
                fontSize: "3rem",
                lineHeight: 1,
              }}
            >
              🏆
            </span>
          </div>

          <div className="col-5">
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
      </div>
    </section>
  );
}

export default ResultsBar;