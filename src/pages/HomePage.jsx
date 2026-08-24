import ProgressBar from '../components/progressbar.jsx';
import Cards from '../components/Cards.jsx';
import ResultsBar from '../components/resultsbar.jsx';

function HomePage({ onLogout }) {
  return (
    <div className="container py-4">
      <ProgressBar />
      <ResultsBar />

      <h1 className="mt-4">Välkommen till Klimatinfo</h1>
      <p>Detta är startsidan. Klicka i navigeringen för att se andra sidor.</p>

      <div className="row g-4 mt-2">
        <div className="col-12 col-md-6 col-lg-4">
          <Cards
            title="Globala Temperaturer"
            buttonText="Visa mer"
            onButtonClick={() => alert('Temperatur')}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <Cards
            title="Koldioxidutsläpp"
            buttonText="Visa mer"
            onButtonClick={() => alert('CO₂')}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <Cards
            title="Glaciärstorlekar"
            buttonText="Visa mer"
            onButtonClick={() => alert('Havsnivå')}
          />
        </div>
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-outline-danger fs-5 mt-3"
          onClick={onLogout}
        >
          Logga ut
        </button>
      </div>
    </div>
  );
}

export default HomePage;
