import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cactusLogo from "../assets/white-logo.png";
import ResetPassword from "../components/ResetPassword";

const Auth = ({ setUser, user }) => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div
      className="w-full flex flex-col items-center justify-center py-8 relative bg-cactus-dark-brown"
      style={{
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <div
        className={
          successMsg || errorMsg
            ? "fixed top-2 right-2 block"
            : "fixed top-2 right-2 hidden"
        }
      >
        <Alert status={successMsg ? "success" : "error"}>
          <AlertIcon />
          {successMsg}
          {errorMsg}
        </Alert>
      </div>

      <Link to="/" className="">
        <img src={cactusLogo} alt="logo" className="cursor-pointer w-[8rem]" />
      </Link>
      <div className="rounded-3xl shadow-3xl w-full max-w-md h-auto p-8 my-7 bg-white">
        {window.location.pathname === "/login" && (
          <Login
            setUser={setUser}
            user={user}
            setSuccessMsg={setSuccessMsg}
            setErrorMsg={setErrorMsg}
          />
        )}
        {window.location.pathname === "/register" && (
          <Signup setSuccessMsg={setSuccessMsg} setErrorMsg={setErrorMsg} />
        )}
        {window.location.pathname === "/reset-password" && (
          <ResetPassword
            setSuccessMsg={setSuccessMsg}
            setErrorMsg={setErrorMsg}
          />
        )}
      </div>

      {window.location.pathname === "/login" && (
        <p className="text-white">
          Don’t have an account?
          <Link to="/register" className="font-bold pl-1">
            Register
          </Link>
        </p>
      )}
      {window.location.pathname === "/register" && (
        <p className="text-white">
          Already have an account?
          <Link to="/login" className="font-bold pl-1">
            Login
          </Link>
        </p>
      )}
    </div>
  );
};

export default Auth;
