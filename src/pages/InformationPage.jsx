import { useEffect, useState } from "react";
import Cards from "../components/Cards";
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
    <div className="container py-3">
      <h1 className="text-center text-success fw-bold mb-3">
        Koldioxidutsläpp
      </h1>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8">
          <Cards>
          

            <img
              src="/co2.png"
              alt="Illustration av koldioxidutsläpp"
              className="img-fluid rounded mb-3"
            />

            <p className="small mb-0">
              Koldioxidutsläpp kommer från saker vi människor gör,
              som att köra bil, flyga, använda elektricitet som
              produceras med fossila bränslen eller tillverka varor
              i fabriker. När vi bränner kol, olja och gas släpps
              koldioxid (CO₂) ut i luften. Det är en gas som inte är
              farlig i sig – vi andas ut den varje dag – men när det
              blir för mycket av den i atmosfären fungerar den som en
              filt runt jorden och gör planeten varmare.
            </p>

            <p className="small mt-3 mb-0">
              När jorden blir varmare påverkas både klimatet och
              naturen. Det kan leda till smältande glaciärer,
              stigande havsnivåer och fler extrema väderhändelser.
              Därför försöker forskare och samhällen runt om i världen
              hitta sätt att minska våra utsläpp.
            </p>
          </Cards>

          <div className="mt-3">
            <Cards>
              {co2data.length > 0 ? (
                <Co2LineChart myData={co2data} />
              ) : (
                <p className="text-center small mb-0">
                  Laddar klimatdata...
                </p>
              )}

              <p className="small mt-3 mb-0">
                Under de senaste 200 åren har koldioxidutsläppen
                ökat enormt, framför allt på grund av att människor
                började använda maskiner och fabriker under
                industrialiseringen. Enligt historiska data har de
                globala koldioxidutsläppen blivit över 180 gånger
                större än de var runt år 1850.
              </p>
            </Cards>
          </div>

          <button
            type="button"
            className="btn btn-success w-100 mt-3 py-2"
          >
            Jag har förstått!
          </button>
        </div>
      </div>
    </div>
  );
}

export default InformationPage;