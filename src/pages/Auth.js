import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-8"
      style={{ minHeight: "100vh", height: "auto" }}
    >
      <div className="text-2xl font-bold mb-6">Cactus</div>
      <div className="rounded-3xl shadow-3xl w-auto h-auto p-8">
        {window.location.pathname === "/login" && <Login />}
        {window.location.pathname === "/register" && <Signup />}
      </div>
    </div>
  );
};

export default Auth;
