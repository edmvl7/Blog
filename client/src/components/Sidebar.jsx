import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiPen } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";




const Sidebar = () => {
  return (
    <>
        <div className=' md:flex md:flex-col md:w-56 fixed mt-[70px] bottom-0 left-0 right-0 md:top-0 md:h-full overflow-y-auto border-t-2 border-gray-50 md:border-e-2 bg-gray-100 md:bg-transparent md:border-t-0 '>
            <div className=' flex justify-center md:flex-col '>
                <Link to={'/dashboard?tab=dash'} className=' md:border md:border-b-1 md:border-gray-200'>           
                    <div className='flex md:gap-4 p-6 md:border-b-1 md:border-gray-200'>
                        <MdDashboard  className='m-1 text-2xl md:text-m' />
                        <p className='hidden md:block'>Dashboard</p>
                    </div>
                </Link>
                <Link to={'/dashboard?tab=dash'} className=' md:border md:border-b-1 md:border-gray-200'>           
                    <div className='flex gap-4 p-6'>
                        <FaUserAlt className='m-1 text-2xl md:text-m' />
                        <p className='hidden md:block'>Profile</p>
                    </div>
                </Link>
                <Link to={'/dashboard?tab=dash'} className=' md:border md:border-b-1 md:border-gray-200'>           
                    <div className='flex gap-4 p-6'>
                        <CiPen className='m-1 text-2xl md:text-m' />
                        <p className='hidden md:block'>Post</p>
                    </div>
                </Link>
                <Link to={'/dashboard?tab=dash'} className=' md:border md:border-b-1 md:border-gray-200'>           
                    <div className='flex gap-4 p-6'>
                        <CiSettings  className='m-1 text-2xl md:text-m' />
                        <p className='hidden md:block'>Dashboard</p>
                    </div>
                </Link>
                

                
            </div>
        </div>
    </>
  )
}

export default Sidebar