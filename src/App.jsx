import { useState } from 'react';
import Navbar from './components/navbar.jsx';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import InformationPage from './pages/InformationPage.jsx';

function App() {
  const [page, setPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar activePage={page} setPage={setPage} isLoggedIn={isLoggedIn} />

      {page === 'home' && <HomePage />}
      {page === 'login' && (
        <LoginPage
          onLogin={() => {
            setIsLoggedIn(true);
            setPage('home');
          }}
        />
      )}
      {page === 'profile' && isLoggedIn && <ProfilePage />}
      {(page === 'information' ||
        page === 'development' ||
        page === 'co2' ||
        page === 'temperature' ||
        page === 'glaciers') && <InformationPage />}
    </>
  );
}

export default App;
