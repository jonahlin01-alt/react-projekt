function Cards({
  children,
  backgroundColor = "#fbefd9",
  border = "none",
  className = "",
  style = {},
}) {
  return (
    <div
      className={`rounded-3 ${className}`}
      style={{
        backgroundColor,
        border,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Cards;