function ResultsBar() {
  return (
    <section
      className="rounded-3 p-3"
      style={{
        backgroundColor: "#fbefd9",
      }}
    >
      <div className="row align-items-center text-center g-2">
        <div className="col-9 col-md-5 order-2 order-md-1">
          <p className="result-text mb-0">
            #6 i din klass
          </p>
        </div>

        <div className="col-3 col-md-2 order-1 order-md-2">
          <span
            className="result-trophy"
            aria-hidden="true"
          >
            🏆
          </span>
        </div>

        <div className="col-9 col-md-5 offset-3 offset-md-0 order-3">
          <p className="result-text mb-0">
            #20 i din skola
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResultsBar;