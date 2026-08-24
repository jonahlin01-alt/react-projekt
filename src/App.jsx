import { useState } from "react";

import Navbar from "./components/navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import InformationPage from "./pages/InformationPage.jsx";

function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage("home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage("login");
  };

  return (
    <>
      <Navbar
        activePage={page}
        setPage={setPage}
        isLoggedIn={isLoggedIn}
      />

      {page === "login" && (
        <LoginPage onLogin={handleLogin} />
      )}

      {page === "home" && isLoggedIn && (
        <HomePage
          setPage={setPage}
          onLogout={handleLogout}
        />
      )}

      {page === "profile" && isLoggedIn && (
        <ProfilePage
          setPage={setPage}
          onLogout={handleLogout}
        />
      )}

      {(page === "information" ||
        page === "development" ||
        page === "co2" ||
        page === "temperature" ||
        page === "glaciers") &&
        isLoggedIn && (
          <InformationPage />
        )}
    </>
  );
}

export default App;