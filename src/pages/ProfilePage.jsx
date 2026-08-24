function ProfilePage({ onLogout }) {
  return (
    <div className="container py-4">
      <h1>Profil</h1>
      <p>Här är din profilinformation. Du kan uppdatera den härifrån.</p>
      <button
        type="button"
        className="btn btn-outline-danger fs-5 mt-3"
        onClick={onLogout}
      >
        Logga ut
      </button>
    </div>
  );
}

export default ProfilePage;
