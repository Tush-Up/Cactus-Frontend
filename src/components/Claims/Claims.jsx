import React from 'react'
import chart from "../../assets/chart2.png";
import list from "../../assets/list.png";

export default function Claims({open}) {
  return (
    <div className="container lg:flex p-2">
      <div className= { `${open ? 'lg:w-4/6' :'lg:w-full'}  mr-[6rem]` }>
      <div className="bg-white shadow-md p-12 border-2 border-gray">
        <div>
          <h1 className="font-medium">Claims Overview</h1>
        </div>
      <div className="">
      <img src={ chart } alt='chart' />
      </div>
      <div className="mt-3">
      <img src={ list } alt='list' />
      </div>
      </div>
      </div>

      <div className={ `shadow-lg ${ open ? 'lg:w-2/3' : 'lg:w-1/2'}  mr-[6rem]`}  >
      <div className="bg-white shadow-md p-12 border-2 border-gray">
        <div>
          Evidence Form 
        </div>
      </div>
      </div>
    </div>
  )
}
