import React, {useState} from "react";
import Calendar from 'react-calendar';
import profile from '../../assets/profile.png';
import { BiBell } from 'react-icons/bi';
import StarRating from "../StarRating";
import greenrate from '../../assets/green-rate.png';
import lightgreenrate from '../../assets/lightgreen-rate.png';
import averagerate from '../../assets/averagerate.png';
import averagebelow from '../../assets/averagebelow.png';
import poorrate from '../../assets/poorrate.png';
// import spiral from '../../assets/spiral.png';
import { useAuth } from "../../auth-context";


const Activity = () =>
{
    const [ date, setDate ] = useState( new Date() );
    const [ log, setLog ] = useState( 0 );
    const { authState } = useAuth();

    return (
        <div className="bg-light-white">
            <div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className="border-4 border-cactus-light-brown rounded-full p-1 cursor-pointer">
                            <img src={ profile } alt='profileImage'/>
                        </div>
                        <h2 className="font-bold text-xl">{authState.name}</h2>
                    </div>
                    <div className="rounded-full p-4 bg-light-white shadow-lg z-20 cursor-pointer">
                        <BiBell size='40' />
                    </div>
                </div>
                <div className="rounded-md shadow-lg z-20 p-3 bg-light-white mt-8">
                    <h2 className="font-bold text-xl mb-2">Upcoming Payments</h2>
                    <div>
                        <Calendar onChange={setDate} value={ date } />
                    </div>
                </div>
                <div className='border-b-4 border-gray-200 h-10'></div>
                <div className="rounded-md shadow-lg z-20 bg-light-white mt-8 mb-10">
                    {/* <div className='flex items-center gap-2'>
                        <img src={ profile } alt='profileImage' />
                        <h2 className="font-bold text-xl">Name</h2>
                    </div> */}
                    <div className='flex items-center justify-between gap-2 mt-4'>
                        <StarRating onChange={ setLog} /> {/* Rating Components will be here */}
                        <h2 className="font-bold text-3xl">{log} <span className="text-xs text-gray-400">out of 5 stars</span></h2>
                    </div>
                    <div>
                        <div className='flex items-center gap-4 justify-between mt-3'>
                            <h2>Excellent</h2>
                            <img src={ greenrate } alt='greenrate' />
                            <h3>35</h3>
                        </div>
                        <div className='flex items-center gap-4 justify-between mt-3'>
                            <h2>Good</h2>
                            <img src={ lightgreenrate } alt='lightgreenrate' />
                            <h3>25</h3>
                        </div>
                        <div className='flex items-center gap-4 justify-between mt-3'>
                            <h2>Average</h2>
                            <img src={ averagerate } alt='averagerate' />
                            <h3>20</h3>

                        </div>
                        <div className='flex items-center gap-4 justify-between mt-3'>
                            <h2>Avg Below</h2>
                            <img src={ averagebelow } alt='averagebelow' />
                            <h3>15</h3>
                        </div>
                        <div className='flex items-center gap-4 justify-between mt-3'>
                            <h2>Poor</h2>
                            <img src={ poorrate } alt='poorrate' />
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
