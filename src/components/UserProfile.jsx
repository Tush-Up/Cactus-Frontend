import React from 'react'
import changechecker from '../assets/changepassword.png'

export default function UserProfile() {
  return (
      <div>
          {/* <div className="bg-white  p-12">
              <h1 className="text-2xl font-bold">Welcome Back, Joy</h1>
          </div> */}
      <div className="bg-white shadow-md pt-12 border-2 border-gray">
        
        <div>
          <h2 className="font-bold p-2">Change Password</h2>
          <p className="text-gray-400 p-2">please update your personal information</p>
        </div>
        <form>
          <div className="border-2 pt-8 pb-8 pr-10 flex gap-10 ">
            <label className="">Current Password</label>
            <input className="w-full border-2 rounded-lg border-gray-400 outline-none p-2" type="password" placeholder="Current Password" />
          </div>
          <div className="border-2 pt-8 pb-8 pr-10 flex gap-10 ">
            <label className="">New Password</label>
            <input className="w-full border-2 rounded-lg border-gray-400 outline-none p-2" type="password" placeholder="Current Password" />
          </div>
          <div className="border-2 pt-8 pb-8 pr-10 flex gap-10 ">
            <label className="">Confirm new password</label>
            <input className="w-full border-2 rounded-lg border-gray-400 outline-none p-2" type="password" placeholder="Current Password" />
          </div>
          

        </form>
            {/* <img src={changechecker} alt="changechecker" className="w-full h-auto" /> */}
          </div>
    </div>
  )
}
