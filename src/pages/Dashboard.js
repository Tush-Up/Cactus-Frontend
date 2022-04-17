import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/Dashboard/DashboardHome";
import Claims from "../components/Claims/Claims";
import UserAccount from "../components/UserAccount/UserAccount";
import Plans from "../components/Plans/Plans";
import Notif from "../components/Notif";
import axios from "../api/axios";
import { useAuth } from "../auth-context";

const Dashboard = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const { token, setToken, setAuthState } = useAuth();
  const USER_URL = "/me";

  useEffect(() => {
    const authToken = JSON.parse(localStorage.getItem("cactus_token"));

    if (authToken) {
      setToken(authToken);

      axios
        .get(USER_URL, {
          headers: { "Content-Type": "application/json", "auth-token": token },
        })
        .then((response) => {
          
          setAuthState(response.data);
        });
    } else {
      navigate("/login");
    }

  }, [setToken, token, navigate, setAuthState]);

  return (
    <div className="flex overflow-hidden w-full relative">
      <Notif successMsg={props.successMsg} errorMsg={props.errorMsg} />
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 h-screen overflow-y-scroll">
        {window.location.pathname === "/dashboard" && (
          <DashboardHome open={open} />
        )}
        {window.location.pathname === "/dashboard/plans" && <Plans />}
        {window.location.pathname === "/dashboard/claims" && (
          <Claims
            setSuccessMsg={props.setSuccessMsg}
            setErrorMsg={props.setErrorMsg}
          />
        )}
        {window.location.pathname === "/dashboard/useraccount" && (
          <UserAccount />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
