import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
const RightSidebar = () => {
  return (
    <div className='w-[25%]'>
      <div className='flex items-center bg-gray-100 rounded-full w-full p-3'>
      <CiSearch size={"24px"} />
      <input className=' outline-none border-none bg-transparent px-2 ml-2' type='text' placeholder='Search'/>
      </div>
      <div className=' p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className=' font-bold text-xl'>Who to follow</h1>
        <div className='flex items-center justify-between my-4'>
        <div className='flex '>
          <div>
          <Avatar size="50" src="https://designimages.appypie.com/profilepicture/profilepicture-2-portrait-head.jpg" round={true} />
          </div>
          <div className=' ml-2'>
            <h1 className=' font-bold'>Elon Musk</h1>
            <p className=' text-sm'>@elonmusk</p>
          </div>
        </div>
        <div>
          <button type='submit' className='  font-bold  bg-black text-white rounded-full py-1 px-4'>Profile</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar