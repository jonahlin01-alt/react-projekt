import { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUser = username.trim().toLowerCase() === "123";
    const validPassword = password === "123";

    if (validUser && validPassword) {
      setError("");
      onLogin();
      return;
    }

    setError("fel");
  };

  return (
      <div className="bg-success min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container bg-light text-center p-5 rounded w-50" >
        <h1 className="my-4 text-success pb-3" style={{
            fontSize: "3rem",
          }}>Klimatinfo</h1>
        <p className="text-muted">Logga in för att få tillgång till din profil och se din historik</p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3 pb-3 w-75 text-center mx-auto ">
            
            <input 
              type="text"
              className="form-control py-3"
              placeholder="användarnamn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div> 

          <div className="mb-3 pb-3 w-75 text-center mx-auto">
            
            
            <input
              type="password"
              className="form-control py-3"
              placeholder="lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-75 py-3 fs-5">
            Logga in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;