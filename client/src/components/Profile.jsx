import React from 'react'
import profilPic from '../assets/images/profile.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";





const Profile = () => {
  return (
    <>
      <div className='md:ms-6'>
        <div className='m-8 border rounded-lg p-12'>
          <div className='flex gap-8'> 
            <img src={profilPic} alt="image" className="h-20 w-20 md:h-36 md:w-36 rounded-full bg-contain"/>
            <div className='flex flex-col '>
              <div className='flex justify-between'>
                <h3 className='text-xl mb-2'>Name of user</h3>
                <FaPencil/>
              </div>
              <p className='w-80'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nisi illum cumque id quasi perferendis aliquid omnis harum dolorum error quisquam pariatur .</p>
              <div className='flex mt-5 gap-5 '>
                <FaXTwitter className='md:text-[21px] ' />
                <FaInstagram className='md:text-[22px]' />
                <FaTiktok className='md:text-[19px]' />
              </div>
            </div>
          </div>
         

        </div>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default Profile