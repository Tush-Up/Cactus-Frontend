import React, { useState, createContext } from "react";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = () => {
    setLoggedIn(true);
  };
  const logout = () => {
    setLoggedIn(false);
  };

  const authContextValue = {
    login,
    logout,
    loggedIn,
    user,
    setUser
  };
  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
