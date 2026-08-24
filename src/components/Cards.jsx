function Cards({ title, text, buttonText, onButtonClick, children }) {
  return (
    <div
      className="card border-0 shadow-sm"
      style={{
        backgroundColor: "#e9f8df",
        borderRadius: "8px",
      }}
    >
      <div className="card-body p-1">

        {title && (
          <h5 className="card-title">
            {title}
          </h5>
        )}

        {text && (
          <p className="card-text small">
            {text}
          </p>
        )}

        {children}

        {buttonText && (
          <button
            className="btn btn-success w-100 mt-3"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}

      </div>
    </div>
  );
}

export default Cards;