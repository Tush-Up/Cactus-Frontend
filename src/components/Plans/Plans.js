import React from 'react'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Plans = () => {
  return (
    <div className="h-">
      <div className="max-w-7xl m-auto">
         <section id="plan" className="my-24">
           <header className="text-center">
             <h3 className="text-5xl font-bold mb-5 text-gray-900">Choose Flexible Pricing Plan For Yourself.</h3>
             <p className="text-xl text-gray-400 mb-2">
             Make good deal just for you to take your experience to the next level
             </p>
             <br />
             <button className="text-lg font-bold rounded-lg bg-cactus-dark-brown text-white hover:text-gray-500 hover:bg-white px-10 py-2  ">Monthly</button>
             <button className="text-lg px-3 font-bold rounded-lg   text-gray-500">Annual saves 30%</button>
           </header> 
           <div className="flex flex-col mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-0 justify-between">
             <div className="flex-1x">
               <div className="bg-white p-10 rounded-lg shadow-lg">
                 <div className="flex justify-between items-center">
                   <div>
                     <h4 className="text-2xl font-bold  text-gray-900">Plus</h4><br />
                     <h4 className="ext-2xl font-bold text-gray-900">#200,000/mth</h4> <br />
                     <p className="ml-3 text-lg text-gray-900">30% off your monthly income</p>
                   </div>
                 </div> 

                 <hr className="text-gray-100 mt-5" />
                 {/* start list section */}
                 <div className="mt-10">
                   <ul  className="space-y-4">
                     <li className="flex items-center">
                       <div className="">
                         <AiOutlineCheck size="1.5em"/>
                       </div>
                       <span className="ml-3 text-xl text-gray-900">View job vacancies</span>
                     </li>
                     <li className="flex items-center">
                       <div className=" ">
                         <AiOutlineCheck size="1.5em"/>
                       </div>
                       <span className="ml-3 text-xl text-gray-900">Get paid 75% off your investment  in the platform</span>
                     </li>
                     <li className="flex items-center">
                       <div className="">
                         <AiOutlineCheck size="1.5em"/>
                       </div>
                       <span className="ml-3 text-xl text-gray-900">Hiring Companies sees your resume</span>
                     </li>
                   </ul>
                 </div>
                 {/* end of list section */}
                 <div className="mt-10">
                   <button className=" text-lg  bg-white border-2 border-cactus-dark-brown text-black hover:bg-cactus-dark-brown hover:text-white w-60 py-3 rounded-lg">Choose Plan</button>
                 </div>

               </div>
             </div>



             <div className="flex-1x">
               <div className="bg-white p-10 rounded-lg shadow-lg">
                 <div className="flex justify-between items-center">
                   <div>
                     <h4 className="text-2xl font-bold  text-gray-900">Basic</h4><br />
                     <h4 className="ext-2xl font-bold text-gray-900">#100,000/mth</h4> <br />
                     <p className="ml-3 text-lg text-gray-900">30% off your monthly income</p>
                   </div>
                 </div> 

                 <hr className="text-gray-100 mt-5" />
                 {/* start list section */}
                 <div className="mt-10">
                   <ul  className="space-y-4">
                     <li className="flex items-center">
                       <div className="">
                         <AiOutlineCheck size="1.5em"/>
                       </div>
                       <span className="ml-3 text-xl text-gray-900">View job vacancies</span>
                     </li>
                     <li className="flex items-center">
                       <div className="">
                         <AiOutlineCheck size="1.5em"/>
                       </div>
                       <span className="ml-3 text-xl text-gray-900">Get paid 60% off your investment  in the platform</span>
                     </li>
                     <li className="flex items-center">
                       <div className="rounded-full p-1">
                          <AiOutlineClose size="1.5em"/>
                       </div>
                       <span className="ml-3 text-xl text-gray-900">Hiring Companies sees your resume</span>
                     </li>
                   </ul>
                 </div>
                 {/* end of list section */}
                 <div className="mt-10">
                   <button className="  text-lg  bg-white border-2 border-cactus-dark-brown text-black hover:bg-cactus-dark-brown hover:text-white w-60 py-3 rounded-lg">Choose Plan</button>
                 </div>

               </div>
             </div>


             <div className="flex-1x">
               <div className="bg-white p-10 rounded-lg shadow-lg">
                 <div className="flex justify-between items-center">
                   <div>
                     <h4 className="text-2xl font-bold  text-gray-900">Lite</h4><br />
                     <h4 className="ext-2xl font-bold text-gray-900">#40,000/mth</h4> <br />
                     <p className="ml-3 text-lg text-gray-900">30% off your monthly income</p>
                   </div>
                 </div> 

                 <hr className="text-gray-100 mt-5" />
                 {/* start list section */}
                 <div className="mt-10">
                   <ul  className="space-y-4">
                     <li className="flex items-center">
                       <div className=" ">
                         <AiOutlineCheck size="1.5em"/>
                       </div>
                       <span className="ml-3 text-xl text-gray-900">View job vacancies</span>
                     </li>
                     <li className="flex items-center">
                       <div className=" ">
                         <AiOutlineClose size="1.5em"/>
                       </div>
                       <span className="ml-3 text-xl text-gray-900">Get paid 40% off your investment  in the platform</span>
                     </li>
                     <li className="flex items-center">
                       <div className="">
                         <AiOutlineClose size="1.5em"/>
                       </div>
                       <span className="ml-3 text-xl text-gray-900">Hiring Companies sees your resume</span>
                     </li>
                   </ul>
                 </div>
                 {/* end of list section */}
                 <div className="mt-10">
                   <button className=" text-lg  bg-white border-2 border-cactus-dark-brown text-black hover:bg-cactus-dark-brown hover:text-white w-60 py-3 rounded-lg">Choose Plan</button>
                 </div>

               </div>
             </div>
           </div>
         </section>
      </div>
    </div>
  )
}

export default Plans