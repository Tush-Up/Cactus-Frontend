import React from 'react'
import changechecker from '../assets/changepassword.png'
import { useAuth } from '../auth-context';

export default function UserProfile() {
  const {authState} = useAuth();
  return (
      <div>
          <div className="bg-white  p-12">
              <h1 className="text-2xl font-bold">Welcome Back, {authState.name} </h1>
          </div>
          <div className="bg-white shadow-md p-12 border-2 border-gray">

            <img src={changechecker} alt="changechecker" className="w-full h-auto" />
          </div>
    </div>
  )
}
