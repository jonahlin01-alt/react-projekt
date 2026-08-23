function Cards({ title, text, buttonText, onButtonClick, children }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>

        {text && <p className="card-text">{text}</p>}

        {children}

        {buttonText && (
          <button
            className="btn btn-success mt-auto"
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