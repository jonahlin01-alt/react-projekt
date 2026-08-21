import Cards from '../components/Cards';

function InformationPage() {
  return (
    <div className="container py-4">
      <h1 className="mt-4">Koldioxidutsläpp</h1>
      <p>Här hittar du aktuell klimatdata och utvecklingsinformation.</p>

      <div className="row g-4 mt-2">
        <div className="col-12 col-md-6 col-lg-4">
          <Cards
            title="Temperatur"
            text="Koldioxidutsläpp kommer från saker vi människor gör, som att köra bil, flyga, använda elektricitet som produceras med fossila bränslen eller tillverka varor i fabriker. När vi bränner kol, olja och gas släpps koldioxid (CO₂) ut i luften. Det är en gas som inte är farlig i sig – vi andas ut den varje dag – men när det blir för mycket av den i atmosfären fungerar den som en filt runt jorden och gör planeten varmare.

            När jorden blir varmare påverkas både klimatet och naturen. Det kan leda till smältande glaciärer, stigande havsnivåer och fler extrema väderhändelser som kraftiga stormar och värmeböljor. Därför försöker forskare och samhällen runt om i världen hitta sätt att minska våra utsläpp, till exempel genom att använda mer förnybar energi, cykla eller åka kollektivt och vara mer sparsamma med resurser. Det handlar om att ta hand om vår planet så att även framtida generationer kan leva tryggt och säkert.."
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <Cards
            title="CO₂-utsläpp"
            text="Under de senaste 200 åren har koldioxidutsläppen ökat enormt, framför allt på grund av att människor började använda maskiner och fabriker under industrialiseringen. Enligt historiska data har de globala koldioxidutsläppen blivit över 180 gånger större än de var runt år 1850. Forskare kan också se i mätningar att mängden koldioxid i luften nu är över 50 % högre än före industrialismen, och att ökningen gått mycket snabbare än några naturliga förändringar i jordens historia."
            buttonText="Visa mer"
            onButtonClick={() => alert('CO₂')}
          />
        </div>

        <button type="submit" className="btn btn-success w-75 py-3 fs-5">
          Jag har förstått!
        </button>
      </div>
    </div>
  );
}

export default InformationPage;
