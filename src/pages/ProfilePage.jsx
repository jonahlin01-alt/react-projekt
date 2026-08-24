import Cards from "../components/Cards.jsx";
import ProgressBar from "../components/progressbar.jsx";
import ResultsBar from "../components/resultsbar.jsx";

function ProfilePage({ onLogout, setPage }) {
  const completedLessons = [
    {
      image: "/koldioxidutsläpp.png",
      alt: "Illustration av den genomförda lektionen om koldioxidutsläpp",
      page: "co2",
    },
    {
      image: "/globalatempraturer.png",
      alt: "Illustration av den genomförda lektionen om globala temperaturer",
      page: "temperature",
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
          maxWidth: "1200px",
        }}
      >
        <ProgressBar setPage={setPage} />

        <div
          className="mx-auto mt-4"
          style={{
            maxWidth: "860px",
          }}
        >
          <ResultsBar />
        </div>

        <div className="d-md-none mt-3">
          <Cards
            border="2px solid #ff9f1c"
            className="position-relative overflow-hidden mb-3"
            style={{
              height: "190px",
            }}
          >
            <img
              src="/glaciärstorlekar.png"
              alt="Illustration av nästa lektion om glaciärstorlekar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />

            <button
              type="button"
              onClick={() => setPage("glaciers")}
              className="position-absolute top-50 start-50 translate-middle"
              style={{
                backgroundColor: "#fffdf8",
                border: "2px solid #ff9f1c",
                borderRadius: "6px",
                color: "#ff8c00",
                padding: "8px 14px",
                fontSize: "0.85rem",
                whiteSpace: "nowrap",
              }}
            >
              Påbörja nästa →
            </button>
          </Cards>

          {completedLessons.map((lesson) => (
            <Cards
              key={lesson.page}
              border="2px solid #174d08"
              className="position-relative overflow-hidden mb-3"
              style={{
                height: "190px",
              }}
            >
              <img
                src={lesson.image}
                alt={lesson.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

              <button
                type="button"
                onClick={() => setPage(lesson.page)}
                className="position-absolute top-50 start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center"
                aria-label="Öppna genomförd lektion"
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#e8f7df",
                  border: "3px solid #174d08",
                  color: "#174d08",
                  fontSize: "2.2rem",
                  lineHeight: 1,
                }}
              >
                ✓
              </button>
            </Cards>
          ))}
        </div>

        <div className="d-none d-md-block mt-4">
          <div className="row g-4 justify-content-center">
            {completedLessons.map((lesson) => (
              <div
                className="col-md-4 col-lg-3 d-flex"
                key={lesson.page}
              >
                <Cards
                  border="2px solid #174d08"
                  className="w-100 position-relative overflow-hidden"
                  style={{
                    height: "190px",
                  }}
                >
                  <img
                    src={lesson.image}
                    alt={lesson.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setPage(lesson.page)}
                    className="position-absolute top-50 start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center"
                    aria-label="Öppna genomförd lektion"
                    style={{
                      width: "78px",
                      height: "78px",
                      backgroundColor: "#e8f7df",
                      border: "4px solid #174d08",
                      color: "#174d08",
                      fontSize: "2.7rem",
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </button>
                </Cards>
              </div>
            ))}

            <div className="col-md-4 col-lg-3 d-flex">
              <Cards
                border="2px solid #ff9f1c"
                className="w-100 position-relative overflow-hidden"
                style={{
                  height: "190px",
                }}
              >
                <img
                  src="/glaciärstorlekar.png"
                  alt="Illustration av nästa lektion om glaciärstorlekar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />

                <button
                  type="button"
                  onClick={() => setPage("glaciers")}
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    backgroundColor: "#fffdf8",
                    border: "2px solid #ff9f1c",
                    borderRadius: "6px",
                    color: "#ff9f1c",
                    padding: "10px 18px",
                    fontSize: "0.95rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Påbörja nästa →
                </button>
              </Cards>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 pb-3">
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
            Logga ut →
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;