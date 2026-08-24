function ProfilePage({ onLogout, setPage }) {
  const completedLessons = [
    {
      title: "KOLDIOXIDUTSLÄPP",
      image: "/ella-ivanescu-JbfhNrpQ_dw-unsplash.jpg",
      page: "co2",
    },
    {
      title: "GLOBALA TEMPERATURER",
      image: "/javier-miranda-7bnvNN3R_eo-unsplash.jpg",
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
        className="container py-3"
        style={{
          maxWidth: "420px",
        }}
      >
        <section
          className="rounded-3 text-center p-3 mb-3"
          style={{
            backgroundColor: "#e8f7df",
          }}
        >
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
            style={{
              width: "62px",
              height: "62px",
              backgroundColor: "#f4d7a1",
              border: "1px solid #8a6c3a",
              fontSize: "34px",
            }}
          >
            👩
          </div>

          <p
            className="mb-2"
            style={{
              fontSize: "0.9rem",
            }}
          >
            Välkommen tillbaka Anna!
          </p>

          <p
            className="mb-4"
            style={{
              fontSize: "0.65rem",
            }}
          >
            Läs igenom en ny lektion för att nå dagens mål!
          </p>

          <p
            className="mb-2"
            style={{
              fontSize: "0.8rem",
            }}
          >
            2 av 3 lektioner genomförda!
          </p>

          <div
            className="progress"
            style={{
              height: "18px",
              borderRadius: "7px",
              backgroundColor: "#fff1d4",
              border: "1px solid #8d815f",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="67"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                width: "67%",
                backgroundColor: "#174d08",
              }}
            />
          </div>
        </section>

        <section
          className="rounded-3 p-3 mb-3"
          style={{
            backgroundColor: "#fbefd9",
          }}
        >
          <div className="d-flex align-items-center">
            <span
              className="me-3"
              style={{
                fontSize: "2.1rem",
              }}
            >
              🏆
            </span>

            <div>
              <p
                className="mb-1"
                style={{
                  fontSize: "0.9rem",
                }}
              >
                #6 i din klass
              </p>

              <p
                className="mb-0"
                style={{
                  fontSize: "0.9rem",
                }}
              >
                #20 i din skola
              </p>
            </div>
          </div>
        </section>

        <section
          className="rounded-3 position-relative overflow-hidden mb-3"
          style={{
            height: "190px",
            border: "2px solid #ff9f1c",
            backgroundColor: "#fbefd9",
          }}
        >
          <img
            src="/magdalena-kula-manchee-qpyZIffH78I-unsplash.jpg"
            alt="Glaciärstorlekar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.75,
            }}
          />

          <div
            className="position-absolute top-0 start-0 w-100 text-center"
            style={{
              paddingTop: "14px",
            }}
          >
            <p
              className="fw-bold mb-0"
              style={{
                fontSize: "0.7rem",
                color: "#394543",
              }}
            >
              GLACIÄRSTORLEKAR
            </p>
          </div>

          <button
            type="button"
            onClick={() => setPage("glaciers")}
            className="position-absolute top-50 start-50 translate-middle"
            style={{
              backgroundColor: "#fffdf8",
              border: "2px solid #ff9f1c",
              borderRadius: "5px",
              color: "#ff8c00",
              padding: "8px 14px",
              fontSize: "0.85rem",
              whiteSpace: "nowrap",
            }}
          >
            Påbörja nästa →
          </button>
        </section>

        {completedLessons.map((lesson) => (
          <section
            key={lesson.page}
            className="rounded-3 position-relative overflow-hidden mb-3"
            style={{
              height: "190px",
              border: "2px solid #174d08",
              backgroundColor: "#fbefd9",
            }}
          >
            <img
              src={lesson.image}
              alt={lesson.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.72,
              }}
            />

            <div
              className="position-absolute top-0 start-0 w-100 text-center"
              style={{
                paddingTop: "14px",
              }}
            >
              <p
                className="fw-bold mb-0"
                style={{
                  fontSize: "0.7rem",
                  color: "#394543",
                }}
              >
                {lesson.title}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setPage(lesson.page)}
              className="position-absolute top-50 start-50 translate-middle rounded-circle d-flex align-items-center justify-content-center"
              aria-label={`Öppna ${lesson.title}`}
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
          </section>
        ))}

        <div className="text-center pt-1 pb-3">
          <button
            type="button"
            onClick={onLogout}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: "#000",
              fontSize: "0.75rem",
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