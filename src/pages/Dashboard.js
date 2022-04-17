import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/Dashboard/DashboardHome";
import Claims from "../components/Claims/Claims";
import UserAccount from "../components/UserAccount/UserAccount";
import Plans from "../components/Plans/Plans";
import Notif from "../components/Notif";

const Dashboard = (props) => {
  const [open, setOpen] = useState(true);
  return (
      <div
        className="flex overflow-hidden w-full relative"
      >
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
