import { useEffect, useState } from "react";
import { Co2LineChart } from "../components/Co2LineChart";

function InformationPage() {
  const [co2data, setCo2data] = useState([]);

  useEffect(() => {
    fetch("https://jek-hb.github.io/climate/co2emissions.json")
      .then((response) => response.json())
      .then((data) => {
        setCo2data(data);
      })
      .catch((error) => {
        console.error("Kunde inte hämta CO₂-data:", error);
      });
  }, []);

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
        <h1
          className="text-center mb-4"
          style={{
            color: "#174d08",
            fontFamily: '"Fontdiner Swanky", serif',
            fontSize: "2rem",
          }}
        >
          Koldioxidutsläpp
        </h1>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-6 d-flex">
            <section
              className="w-100 rounded-3 p-4"
              style={{
                backgroundColor: "#fbefd9",
              }}
            >
              <img
                src="/ella-ivanescu-JbfhNrpQ_dw-unsplash.jpg"
                alt="Koldioxidutsläpp från industri"
                className="img-fluid rounded-3 mb-4"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <p
                className="mb-3"
                style={{
                  fontSize: "0.85rem",
                  lineHeight: "1.45",
                }}
              >
                Koldioxidutsläpp kommer från saker vi människor gör,
                som att köra bil, flyga, använda elektricitet som
                produceras med fossila bränslen eller tillverka varor
                i fabriker. När vi bränner kol, olja och gas släpps
                koldioxid (CO₂) ut i luften. Det är en gas som inte är
                farlig i sig – vi andas ut den varje dag – men när det
                blir för mycket av den i atmosfären fungerar den som en
                filt runt jorden och gör planeten varmare.
              </p>

              <p
                className="mb-0"
                style={{
                  fontSize: "0.85rem",
                  lineHeight: "1.45",
                }}
              >
                När jorden blir varmare påverkas både klimatet och
                naturen. Det kan leda till smältande glaciärer,
                stigande havsnivåer och fler extrema väderhändelser
                som kraftiga stormar och värmeböljor. Därför försöker
                forskare och samhällen runt om i världen hitta sätt
                att minska våra utsläpp, till exempel genom att
                använda mer förnybar energi, cykla eller åka
                kollektivt och vara mer sparsamma med resurser.
                Det handlar om att ta hand om vår planet så att även
                framtida generationer kan leva tryggt och säkert.
              </p>
            </section>
          </div>

          <div className="col-12 col-lg-6 d-flex">
            <section
              className="w-100 rounded-3 p-4 d-flex flex-column"
              style={{
                backgroundColor: "#e7f6df",
              }}
            >
              {co2data.length > 0 ? (
                <Co2LineChart myData={co2data} />
              ) : (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    minHeight: "300px",
                  }}
                >
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "0.85rem",
                    }}
                  >
                    Laddar klimatdata...
                  </p>
                </div>
              )}

              <p
                className="mt-4 mb-0"
                style={{
                  fontSize: "0.85rem",
                  lineHeight: "1.45",
                }}
              >
                Under de senaste 200 åren har koldioxidutsläppen
                ökat enormt, framför allt på grund av att människor
                började använda maskiner och fabriker under
                industrialiseringen. Enligt historiska data har de
                globala koldioxidutsläppen blivit över 180 gånger
                större än de var runt år 1850. Forskare kan också se
                i mätningar att mängden koldioxid i luften nu är över
                50 % högre än före industrialismen, och att ökningen
                gått mycket snabbare än några naturliga förändringar
                i jordens historia.
              </p>
            </section>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-success"
            style={{
              width: "300px",
              maxWidth: "100%",
              backgroundColor: "#174d08",
              borderColor: "#174d08",
            }}
          >
            Jag har förstått!
          </button>
        </div>
      </div>
    </main>
  );
}

export default InformationPage;