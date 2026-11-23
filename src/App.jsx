import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MainContainer from './MainContainer.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';

function App() {
  const [page, setPage] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash || '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Header />
      {page === '#signup' && <Signup />}
      {page === '#login' && <Login />}
      {page !== '#signup' && page !== '#login' && <MainContainer />}
      <Footer />
    </>
  );
}

export default App;
