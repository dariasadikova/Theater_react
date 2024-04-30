import { useState } from "react";
import Navbar from "./components/Navbar/index";
import MainRouter from "./app/routes/MainRouter";
import { AuthProvider } from "./contexts/AuthContext";
import GlobalStyles from "./global-styles";
import "./App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <MainRouter isAuth={isAuth} />
      </AuthProvider>
    </>
  );
};

export default App;
