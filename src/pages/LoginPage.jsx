import { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <main
      style={{
        backgroundColor: "#174d08",
        minHeight: "100vh",
      }}
    >
      <div
        className="container d-flex justify-content-center align-items-start py-5"
        style={{
          minHeight: "100vh",
        }}
      >
        <div
          className="w-100"
          style={{
            maxWidth: "430px",
          }}
        >
          <div
            className="mx-auto rounded-3"
            style={{
              backgroundColor: "#fffdf8",
              maxWidth: "320px",
              padding: "36px 26px 40px",
            }}
          >
            <h1
              className="text-center mb-4"
              style={{
                fontFamily: '"Fontdiner Swanky", serif',
                color: "#174d08",
                fontSize: "2.2rem",
              }}
            >
              Klimatinfo
            </h1>

            <p
              className="mb-4"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.4",
              }}
            >
              Logga in för att få tillgång till din profil och se din
              historik.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  style={{
                    display: "block",
                    fontSize: "0.65rem",
                    marginBottom: "4px",
                    marginLeft: "10px",
                    color: "#174d08",
                  }}
                >
                  Användarnamn
                </label>

                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  style={{
                    height: "44px",
                    border: "2px solid #174d08",
                    borderRadius: "2px",
                    backgroundColor: "#fffdf8",
                    boxShadow: "none",
                  }}
                />
              </div>

              <div className="mb-4">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Lösenord"
                  style={{
                    height: "44px",
                    border: "1px solid #b7b7b7",
                    borderRadius: "2px",
                    backgroundColor: "#fffdf8",
                    boxShadow: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#174d08",
                  color: "#ffffff",
                  borderRadius: "6px",
                  height: "44px",
                  fontSize: "1.05rem",
                  border: "none",
                }}
              >
                Logga in
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;