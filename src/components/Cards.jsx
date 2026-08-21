function Cards({ title, text, buttonText, onButtonClick }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>

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