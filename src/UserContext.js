import React, { useState, createContext } from "react";

export const userContext = createContext();

export const UserProvider = (props) => {
  

  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  return (
    <userContext.Provider value={[user, setUser, isLogin, setIsLogin]}>
      {props.children}
    </userContext.Provider>
  );
};
