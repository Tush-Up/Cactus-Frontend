import React from 'react';
import catcuslogo from '../asserts/catcuslogo.png';
import { BsArrowLeftCircle, BsGrid, BsWallet2 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CgBriefcase } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


export default function Sidebar ( { open, setOpen } )
{
    const navigate = useNavigate()
    return (
        <div className={ `${ open ? 'w-72' : 'w-20' } duration-300 h-screen bg-light-white shadow-xl p-5  pt-8 relative` } >
            <BsArrowLeftCircle className={ `absolute cursor-pointer rounded-full -right-3 top-9 w-7  ${ !open && 'rotate-180' }` } alt="logo"
                onClick={ () => setOpen( !open ) }
            />
            <div className="flex gap-x-4 items-center" onClick={ () => navigate( '/dashboard' ) }>
                <img src={ catcuslogo } alt='logo' className={ `cursor-pointer duration-500 ${ open && "rotate-[360deg]"
                    }` } />
                <h1
                    className={ `text-cactus-dark-brown origin-left font-medium text-2xl duration-200 ${ !open && "scale-0"
                        }` }
                >
                    CACTUS
                </h1>
            </div>
            <ul className="pt-6">
                <li onClick={ () => navigate( '/dashboard' ) } className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-dark-brown hover:text-white text-cactus-dark-brown text-sm items-center gap-x-4 mt-9` }>
                    {/* <Link to='/dashboard' /> */ }
                    <BsGrid className={ `cursor-pointer duration-500` } size='30' />  <span className={ `${ !open && "hidden" } origin-left duration-200 text-lg` }>
                        Dashboard
                    </span>
                </li>
                <li onClick={ () => navigate( '/dashboard/claims' ) }
                    className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-dark-brown hover:text-white text-cactus-dark-brown text-sm items-center gap-x-4 mt-9` }>
                    {/* <Link to='/dashboard' /> */ }
                    <CgBriefcase className={ `cursor-pointer duration-500` } size='30' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-lg` }>
                        Plans
                    </span>
                </li>
                <li onClick={ () => navigate( '/dashboard/claims' ) } className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-dark-brown hover:text-white text-cactus-dark-brown text-sm items-center gap-x-4 mt-9` }>
                    <BsWallet2 className={ `cursor-pointer duration-500` } size='30' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-lg` }>
                        Claims
                    </span>
                </li>
                <li onClick={ () => navigate( '/dashboard/useraccount' ) } className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-dark-brown hover:text-white text-cactus-dark-brown text-sm items-center gap-x-4 mt-9` }>
                    <AiOutlineUser className={ `cursor-pointer duration-500` } size='30' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-lg` }>
                        Account
                    </span>
                </li>
            </ul>
        </div>
    )
}
