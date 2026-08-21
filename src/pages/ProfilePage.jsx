function ProfilePage() {
  return (
    <div className="container">
      <h1>Profil</h1>
      <p>Här är din profilinformation. Du kan uppdatera den härifrån.</p>
      <a className="text-center fs-2 text-decoration-underline text-dark" href="LoginPage" onClick={() => setIsLoggedIn(false)}>
          Logga ut
        </a>
    </div>
  );
}

export default ProfilePage;
