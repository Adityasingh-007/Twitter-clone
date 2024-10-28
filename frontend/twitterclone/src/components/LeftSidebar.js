import React from 'react'
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div>
      <div>
        <div className=' ml-3 mt-2 w-[20%] '>
          <FaXTwitter size={"32px"} />
        </div>
        <div className=' my-4'>
          <Link to={'/'} className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <GoHome size={"34px"} />
            </div>
            <h1 className=' text-lg font-semibold ml-4'>Home</h1>
          </Link>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <IoSearchOutline size={"34px"} />
            </div>
            <h1 className=' text-lg font-semibold ml-4'>Explore</h1>
          </div>
          <div className='flex items-center my-2 px-1 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <IoMdNotificationsOutline size={"34px"} />
            </div>
            <h1 className=' text-lg font-semibold ml-5'>Notifications</h1>
          </div>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <RiMessage2Fill size={"24px"} />
            </div>
            <h1 className=' text-lg font-semibold ml-6'>Messages</h1>
          </div>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <HiUsers size={"24px"} />
            </div>
            <h1 className=' text-lg font-semibold ml-6'>Communities</h1>
          </div>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CiBookmark size={"24px"} />
            </div>
            <h1 className=' text-lg font-semibold ml-6'>Bookmark</h1>
          </div>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <FaXTwitter size={"24px"} />
            </div>
            <h1 className=' text-lg font-semibold ml-6'>Premium</h1>
          </div>
          <Link to={'/profile'} className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <FaUser size={"24px"} />
            </div>
            <h1 className=' text-lg  font-semibold ml-6'>Profile</h1>
          </Link>
          <div className='flex items-center my-2 px-2 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CgMoreO size={"24px"} />
            </div>
            <h1 className=' text-lg font-semibold ml-6'>More</h1>
          </div>
          <button className=' text-lg bg-[#1D9BFB] py-3 px-4 rounded-full w-full text-white font-semibold' type='submit'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar