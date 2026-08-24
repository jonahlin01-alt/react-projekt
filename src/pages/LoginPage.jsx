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
      className="d-flex justify-content-center align-items-start py-5 px-3"
      style={{
        backgroundColor: "#174d08",
        minHeight: "calc(100vh - 58px)",
      }}
    >
      <div
        className="w-100"
        style={{
          maxWidth: "520px",
        }}
      >
        <div
          className="w-100 rounded-3 p-4 p-md-5"
          style={{
            backgroundColor: "#fffdf8",
          }}
        >
          <h1
            className="login-logo text-center mb-4"
            style={{
              color: "#174d08",
            }}
          >
            Klimatinfo
          </h1>

          <p className="mb-4">
            Logga in för att få tillgång till din profil och se din historik.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="d-block mb-1"
                style={{
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
                  height: "48px",
                  border: "2px solid #174d08",
                  borderRadius: "4px",
                  backgroundColor: "#fffdf8",
                  boxShadow: "none",
                }}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="d-block mb-1"
                style={{
                  color: "#174d08",
                }}
              >
                Lösenord
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                style={{
                  height: "48px",
                  border: "1px solid #b7b7b7",
                  borderRadius: "4px",
                  backgroundColor: "#fffdf8",
                  boxShadow: "none",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn w-100"
              style={{
                height: "48px",
                backgroundColor: "#174d08",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Logga in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;