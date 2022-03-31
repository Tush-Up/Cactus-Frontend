import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/Dashboard/DashboardHome";
import Claims from "../components/Claims/Claims";
import UserAccount from '../components/UserAccount/UserAccount';
import Plans from '../components/Plans';
const Dashboard = () =>
{
  const [ open, setOpen ] = useState( true );
  return <div className="flex ">
    <Sidebar open={ open } setOpen={ setOpen } />
    
    <div className="p-7 flex-1 h-screen">
      { window.location.pathname === "/dashboard" && <DashboardHome /> }
      { window.location.pathname === "/dashboard/claims" && <Claims /> }
      { window.location.pathname === "/dashboard/useraccount" && <UserAccount /> }
      { window.location.pathname === "/dashboard/plans" && <Plans /> }
    </div>
  </div>;
};

export default Dashboard;
