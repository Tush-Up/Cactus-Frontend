import React from 'react';
import BankSetting from '../BankSettings';
import ContactUs from '../ContactUs';
import MyWallet from '../MyWallet';
import UserProfile from '../UserProfile';
import Activity from '.././Activity/Activity';
import UserNav from '../UserNav';

export default function UserAccount ( { open, setOpen } ) {
  return (
    <div className="container lg:flex p-2">
      <div className='lg:w-full px-5'>
        <UserNav />
        <div>
          { window.location.pathname === "/dashboard/useraccount" && <UserProfile /> }
        { window.location.pathname === "/dashboard/useraccount/mywallet" && <MyWallet /> }
        { window.location.pathname === "/dashboard/useraccount/banksettings" && (
          <BankSetting />
        ) }
        { window.location.pathname === "/dashboard/useraccount/contactus" && (
          <ContactUs />
        ) }
        </div>
      </div>
      <div className={ `shadow-lg ${ open ? 'lg:w-1/3' : 'lg:w-1/2' } p-8` }>
        <Activity /> {/*Here you update the value to the real data */ }
      </div>
    </div>
  )
}
