import React, {useState} from "react";
import Calendar from 'react-calendar';
import profile from '../../assets/profile.png';
import { BiBell } from 'react-icons/bi';
// import spiral from '../../assets/spiral.png';


const Activity = () =>
{
    const [ date, setDate ] = useState( new Date() )
        ;
    return (
        <div className="bg-light-white">
            <div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className="border-4 border-cactus-light-brown rounded-full p-1">
                            <img src={ profile } alt='profileImage'/>
                        </div>
                        <h2 className="font-bold text-xl">Name</h2>
                    </div>
                    <div className="rounded-full p-4 bg-light-white shadow-lg z-20">
                        <BiBell size='40' />
                    </div>
                </div>
                <div className="rounded-md shadow-lg z-20 p-3 bg-light-white mt-8">
                    <h2 className="font-bold text-2xl mb-2">Upcoming Payments</h2>
                    <div>
                        <Calendar onChange={setDate} value={ date } />
                    </div>
                </div>
                <div className='border-b-4 border-gray-200 h-10'></div>
                <div className="rounded-md shadow-lg z-20 p-8 bg-light-white mt-8 mb-10">
                    <div className='flex items-center gap-2'>
                        <img src={ profile } alt='profileImage' />
                        <h2 className="font-bold text-xl">Name</h2>
                    </div>

                    
                </div>
                <div className="rounded-md shadow-lg z-20 p-2 bg-light-white ">
                    <div className="rounded-md bg-cactus-light-brown p-5 flex">
                        <div>
                            <h2 className="text-white text-xl font-bold">Do You Still Need Our Help?</h2>
                            <p className="text-xs text-white">Send your request via email</p>
                            <a href="https://github.com/">
                                <button className="bg-light-white rounded-md p-3 mt-2" >
                                    <h3 className='text-cactus-light-brown font-bold'>Send Request</h3>
                                </button>
                            </a>
                        </div>
                        {/* <div className="absolute bg-cactus-light-brown">
                            <img src={ spiral } alt='spiralImage' />
                        </div> */}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Activity;
