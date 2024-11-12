import {React} from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Signup from './Signup';
import Login from './Login';

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation(); 
  const noFooterRoutes = ['/signup', '/login'];
  const nonavbarRoutes = ['/signup', '/login'];

  return (
    <>
      {!nonavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;

