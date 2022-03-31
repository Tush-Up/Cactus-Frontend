import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";

const Auth = ({ setUser, user }) => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div
      className="w-full flex flex-col items-center justify-center py-8 relative"
      style={{ minHeight: "100vh", height: "auto" }}
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

      <div className="text-2xl font-bold mb-6">Cactus</div>
      <div className="rounded-3xl shadow-3xl w-auto h-auto p-8">
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
      </div>
    </div>
  );
};

export default Auth;
