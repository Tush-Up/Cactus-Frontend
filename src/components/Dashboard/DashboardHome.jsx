import React from 'react';
import Activity from "../Activity/Activity";
import chart from "../../assets/chart.png";
import transgreen from "../../assets/Trans-green.png";
import transred from "../../assets/Trans-red.png";

export default function DashboardHome({open}) {
  return (
    <div className="container lg:flex p-2">
      <div className={ `${open ? 'lg:w-4/6' :'lg:w-full'}  mr-5` }>
        <div className="bg-white  p-12">
          <h1 className="text-2xl font-bold">Welcome Back, Joy</h1>
        </div>
        <div className="bg-white shadow-md p-12 border-2 border-gray">
          <div className="bg-white z-40 shadow-lg rounded-lg">
            <div className="flex justify-between p-10">
              <div>
                <h5 className='text-gray-400'>Total Wallet Balance</h5>
                <p className="text-4xl bold"># 2,000,000</p>  {/*Here you update the value to the real data */}
              </div>
              <div className='border-r-4 border  h-40'></div>
              <div>
                <div className="flex gap-3 m-4">
                  <img src={transgreen}  className='h-8' alt='green'/>
                  <div>
                    <h3 className='text-gray-600'>Inflow</h3>
                    <h4 className='text-xl bold'>#200,000</h4> {/*Here you update the value to the real data */ }
                  </div>
                </div>
                <div className="flex gap-3  m-4">
                  <img src={ transred } className='h-8' alt='red'/>
                  <div>
                    <h3 className='text-gray-600'>Payout</h3>
                    <h4 className='text-xl bold'>#500,000</h4> {/*Here you update the value to the real data */ }
                  </div>
                </div>
              </div>
             </div>
          </div>
          <div className="mt-3">
            <img src={ chart } alt='chart' /> {/*Here you update the chart to  real chart not image*/ }
          </div>
          <div>
            <h2>Transactions</h2>
          </div>
        </div>
      </div>

      <div className={ `shadow-lg ${ open ? 'lg:w-1/3' : 'lg:w-1/2'} p-8` }>
        <Activity /> {/*Here you update the value to the real data */ }
      </div>
    </div>
      
   
  )
}
