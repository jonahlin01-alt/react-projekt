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
    <div className="container py-4">
      <h1 className="mt-4">Koldioxidutsläpp</h1>

      <p>
        Här hittar du aktuell klimatdata och utvecklingsinformation.
      </p>

      <div className="row g-4 mt-2">

      
        <div className="col-12">
          <Cards title="Globala CO₂-utsläpp"> 
          <Cards text= "Anpassa Diagrammet"></Cards>

            {co2data.length > 0 && (
              <Co2LineChart myData={co2data} />
            )}
          </Cards>
        </div>

        
        <div className="col-12 col-md-6 col-lg-4">
          <Cards
            title="CO₂-utsläpp"
            text="Under de senaste 200 åren har koldioxidutsläppen ökat enormt, framför allt på grund av att människor började använda maskiner och fabriker under industrialiseringen. Enligt historiska data har de globala koldioxidutsläppen blivit över 180 gånger större än de var runt år 1850. Forskare kan också se i mätningar att mängden koldioxid i luften nu är över 50 % högre än före industrialismen."
            buttonText="Visa mer"
            onButtonClick={() => alert("CO₂")}
          />
        </div>

        <button
          type="button"
          className="btn btn-success w-75 py-3 fs-5"
        >
          Jag har förstått!
        </button>

      </div>
    </div>
  );
}

export default InformationPage;