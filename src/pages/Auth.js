import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Link } from "react-router-dom";
import cactusLogo from "../assets/white-logo.png";
import ResetPassword from "../components/ResetPassword";
import Notif from "../components/Notif";

const Auth = (props) => {
  
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-8 relative bg-auth bg-no-repeat bg-cover bg-center"
      style={{
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <Notif successMsg={props.successMsg} errorMsg={props.errorMsg} />

      <Link to="/" className="">
        <img src={cactusLogo} alt="logo" className="cursor-pointer w-[8rem]" />
      </Link>
      <div className="rounded-3xl shadow-3xl w-full max-w-md h-auto p-8 my-7 bg-white">
        {window.location.pathname === "/login" && (
          <Login
            setUser={props.setUser}
            user={props.user}
            setSuccessMsg={props.setSuccessMsg}
            setErrorMsg={props.setErrorMsg}
          />
        )}
        {window.location.pathname === "/register" && (
          <Signup setSuccessMsg={props.setSuccessMsg} setErrorMsg={props.setErrorMsg} />
        )}
        {window.location.pathname === "/reset-password" && (
          <ResetPassword
            setSuccessMsg={props.setSuccessMsg}
            setErrorMsg={props.setErrorMsg}
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
