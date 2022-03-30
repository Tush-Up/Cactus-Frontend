import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="italic">Cactus</div>
      <div className="rounded shadow-lg w-auto h-auto p-8">
        {window.location.pathname === "/login" && <Login />}
        {window.location.pathname === "/register" && <Signup />}
      </div>
    </div>
  );
};

export default Auth;
