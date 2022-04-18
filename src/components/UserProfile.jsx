import React from 'react'
import changechecker from '../assets/changepassword.png'

export default function UserProfile() {
  return (
      <div>
          <div className="bg-white  p-12">
              <h1 className="text-2xl font-bold">Welcome Back, Joy</h1>
          </div>
          <div className="bg-white shadow-md p-12 border-2 border-gray">

            <img src={changechecker} alt="changechecker" className="w-full h-auto" />
          </div>
    </div>
  )
}
