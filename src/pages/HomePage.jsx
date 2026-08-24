import Cards from "../components/Cards.jsx";
import ProgressBar from "../components/progressbar.jsx";

function HomePage({ setPage, onLogout }) {
  const cards = [
    {
      image: "/koldioxidutsläpp.png",
      alt: "Illustration av en fabrik och koldioxidutsläpp",
      text: "Koldioxidutsläppen har ökat genom förbränning av fossila bränslen. Detta påverkar vår atmosfär och genom det även vårt klimat.",
      page: "co2",
    },
    {
      image: "/globalatempraturer.png",
      alt: "Illustration av jorden och stigande globala temperaturer",
      text: "Vi lever på ett sätt som påverkar jordens temperatur. Den globala temperaturen har ökat under många år, delvis på grund av våra utsläpp.",
      page: "temperature",
    },
    {
      image: "/glaciärstorlekar.png",
      alt: "Illustration av en glaciär som minskar i storlek",
      text: "Jordens glaciärer påverkas i stor grad av jordens temperaturer. Under de senaste åren har glaciärernas storlekar minskat, och havsnivåer ökat.",
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
        <ProgressBar setPage={setPage} />

        <div className="d-md-none mt-3">
          <div className="d-flex flex-column gap-3">
            {cards.map((card) => (
              <Cards
                key={card.page}
                className="p-3"
              >
                <div className="row g-3 align-items-center">
                  <div className="col-5">
                    <img
                      src={card.image}
                      alt={card.alt}
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="col-7">
                    <p
                      className="text-center mb-0"
                      style={{
                        lineHeight: "1.3",
                      }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>

                <div className="text-center mt-2">
                  <button
                    type="button"
                    onClick={() => setPage(card.page)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      color: "#28651d",
                      fontSize: "0.85rem",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    Läs mer...
                  </button>
                </div>
              </Cards>
            ))}
          </div>
        </div>

        <div className="d-none d-md-block mt-4">
          <div className="row g-4">
            {cards.map((card) => (
              <div
                className="col-md-4 d-flex"
                key={card.page}
              >
                <Cards
                  className="w-100 p-3 text-center d-flex flex-column"
                  style={{
                    minHeight: "380px",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                    }}
                  />

                  <p
                    className="mt-3 mb-3"
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {card.text}
                  </p>

                  <button
                    type="button"
                    onClick={() => setPage(card.page)}
                    className="mt-auto"
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      color: "#28651d",
                      fontSize: "0.85rem",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    Läs mer...
                  </button>
                </Cards>
              </div>
            ))}
          </div>
        </div>

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