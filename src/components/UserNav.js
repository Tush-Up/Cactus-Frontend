import React from 'react';
import { Link } from 'react-router-dom';


export default function UserNav() {
  return (
      <nav  className='p-6 '>
          <ul className='flex  justify-between'>
              <Link to='/dashboard/useraccount' className='text-blue-500 hover:text-blue-700'>
                  <li className='pl-12 pr-12'> Update user profile</li>
              </Link>
                <Link to='/dashboard/useraccount/mywallet' className='text-blue-500 hover:text-blue-700'>
                  <li className='pl-12 pr-12'>My wallet</li>
              </Link>
              <Link to='/dashboard/useraccount/banksettings' className='text-blue-500 hover:text-blue-700'>
                  <li className='pl-12 pr-12'>Bank Settings</li>
              </Link>
              <Link to='/dashboard/useraccount/contactus' className=''>
                  <li className='pl-12 pr-12'>Contact Us</li>
              </Link>
          </ul>
    </nav>
  )
}
