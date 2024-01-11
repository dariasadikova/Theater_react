import React, { useState } from 'react';
import Navbar from './components/Navbar/index';
import MainRouter from './app/routes/MainRouter';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthProvider>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <MainRouter isAuth={isAuth} />
    </AuthProvider>
  );
};


export default App;