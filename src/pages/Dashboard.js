import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/Dashboard/DashboardHome";
import Claims from "../components/Claims/Claims";
import UserAccount from "../components/UserAccount/UserAccount";
import Plans from "../components/Plans/Plans";
import { UserProvider } from "../UserContext";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  return (
    <UserProvider>
      <div className="flex overflow-hidden">
        <Sidebar open={open} setOpen={setOpen} />

        <div className="flex-1 h-screen overflow-y-scroll">
          {window.location.pathname === "/dashboard" && (
            <DashboardHome open={open} />
          )}
          {window.location.pathname === "/dashboard/plans" && <Plans />}
          {window.location.pathname === "/dashboard/claims" && <Claims />}
          {window.location.pathname === "/dashboard/useraccount" && (
            <UserAccount />
          )}
        </div>
      </div>
    </UserProvider>
  );
};

export default Dashboard;
