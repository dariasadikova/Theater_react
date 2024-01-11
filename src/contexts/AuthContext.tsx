import React, { createContext, useState, useContext } from 'react';


type AuthContextType = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};


const AuthContext = createContext<AuthContextType>(null!);

type AuthProviderProps = {
    children: React.ReactNode;
  };
  

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
