import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/Dashboard/DashboardHome";
import Claims from "../components/Claims/Claims";
import UserAccount from '../components/UserAccount/UserAccount';
import Plans from '../components/Plans/Plans';

const Dashboard = () =>
{
  const [ open, setOpen ] = useState( true );
  return (
    <div className="flex overflow-hidden">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 h-screen overflow-y-scroll">
        {window.location.pathname === "/dashboard" && <DashboardHome open={open} />}
        {window.location.pathname === "/dashboard/plans" && (
          <Plans />
        )}
        {window.location.pathname === "/dashboard/claims" && <Claims />}
        {window.location.pathname === "/dashboard/useraccount" && (
          <UserAccount />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
