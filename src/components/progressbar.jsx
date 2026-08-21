function ProgressBar() {
  return (
    <div className="container-fluid bg-light rounded p-3 border">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0">
          <img
            src="https://via.placeholder.com/56"
            alt="Profilbild"
            className="rounded-circle border me-3"
            width="56"
            height="56"
          />

          <div>
            <h4 className="mb-1">Välkommen tillbaka Anna!</h4>
            <p className="mb-0 text-muted">
              Läs igenom en ny lektion för att
              <br />
              nå dagens mål!
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <h4 className="mb-3 text-md-end">2 av 3 lektioner genomförda!</h4>

          <div className="progress">
            <div className="progress-bar bg-success w-75"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
