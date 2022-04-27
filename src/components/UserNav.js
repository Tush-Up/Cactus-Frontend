import React from 'react';
import { Link } from 'react-router-dom';


export default function UserNav() {
  return (
      <nav  className='p-5 '>
          <ul className='flex justify-between'>
              <Link to='/dashboard/useraccount' className='text-cactus-brown'>
                  <li className='pl-6 pr-6'> Update user profile</li>
              </Link>
                <Link to='/dashboard/useraccount/mywallet' className='text-blue-500 hover:text-blue-700'>
                  <li className='pl-6 pr-6'>My wallet</li>
              </Link>
              <Link to='/dashboard/useraccount/banksettings' className='text-blue-500 hover:text-blue-700'>
                  <li className='pl-6 pr-6'>Bank Settings</li>
              </Link>
              <Link to='/dashboard/useraccount/contactus' className=''>
                  <li className='pl-6 pr-6'>Contact Us</li>
              </Link>
          </ul>
    </nav>
  )
}
