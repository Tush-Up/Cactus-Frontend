import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [token, setToken] = useState("");
  const [authState, setAuthState] = useState({
    
  });

  const authContextValue = {
    authState,
    setAuthState,
    token,
    setToken,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
