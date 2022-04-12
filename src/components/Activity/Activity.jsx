import React, {useState} from "react";
import Calendar from 'react-calendar';
import profile from '../../assets/profile.png';
import { BiBell } from 'react-icons/bi';
import StarRating from "../StarRating";
// import spiral from '../../assets/spiral.png';


const Activity = () =>
{
    const [ date, setDate ] = useState( new Date() );
    const [ log, setLog ] = useState( 0 );


    return (
        <div className="bg-light-white">
            <div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className="border-4 border-cactus-light-brown rounded-full p-1 cursor-pointer">
                            <img src={ profile } alt='profileImage'/>
                        </div>
                        <h2 className="font-bold text-xl">Name</h2>
                    </div>
                    <div className="rounded-full p-4 bg-light-white shadow-lg z-20 cursor-pointer">
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
                    <div className='flex items-center justify-between gap-2 mt-4'>
                        <StarRating onChange={ setLog} /> {/* Rating Components will be here */}
                        <h2 className="font-bold text-3xl">{log} <span className="text-xs text-gray-400">out of 5 stars</span></h2>
                    </div>
                    <div>
                        <div className='flex items-center justify-between mt-3'>
                            <h2>Excellent</h2>
                            <h3>35</h3>
                        </div>
                        <div className='flex items-center justify-between mt-3'>
                            <h2>Good</h2>
                            <h3>25</h3>
                        </div>
                        <div className='flex items-center justify-between mt-3'>
                            <h2>Average</h2>
                            <h3>20</h3>

                        </div>
                        <div className='flex items-center justify-between mt-3'>
                            <h2>Avg Below</h2>
                            <h3>15</h3>
                        </div>
                        <div className='flex items-center justify-between mt-3'>
                            <h2>Poor</h2>
                            <h3>05</h3>
                        </div>
                    </div>
                </div>
                <div className="rounded-md shadow-lg z-20 p-2 bg-light-white ">
                    <div className="rounded-md bg-cactus-light-brown p-5 flex">
                        <div>
                            <h2 className="text-white text-xl font-bold">Do You Still Need Our Help?</h2>
                            <p className="text-xs text-white">Send your request via email</p>
                            <a href="https://github.com/">
                                <button className="bg-light-white rounded-md p-4 mt-2" >
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
