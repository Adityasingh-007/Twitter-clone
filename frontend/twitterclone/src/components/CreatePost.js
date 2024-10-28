import React from 'react'
import Avatar from 'react-avatar'
import { CiImageOn } from "react-icons/ci";


const CreatePost = () => {
  return (
    <div className=' w-full'>
      <div>
        <div className=' flex items-center justify-evenly border-b border-gray-200'>
          <div className='cursor-pointer text-center hover:bg-gray-200  w-full px-3 py-4'>
            <h1 className=' text-lg font-semibold '>For you</h1>
          </div>
          <div className='cursor-pointer text-center hover:bg-gray-200  w-full px-3 py-4'>
            <h1 className=' text-lg font-semibold'>Following</h1>
          </div>
        </div>

        <div className='flex items-center p-4'>
          <div>

            <Avatar size="50" src="https://designimages.appypie.com/profilepicture/profilepicture-2-portrait-head.jpg" round={true} />
            {/* <Avatar size="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8EX-if9Q3dzMgX_sX37nPEGluqD08P7KVQ&s" round={true} /> */}
          </div>
          <input className=' w-full border-none outline-none text-xl ml-2' type='text' placeholder='What is happening?!' />
        </div>

        <div className=' flex items-center justify-between p-4 border-b border-gray-300 '>
          <div>
          <CiImageOn size={'24px'} />
          </div>
          <button className=' bg-[#1D9BF0] px-4 py-1 rounded-full text-white font-semibold text-lg' type='submit' >Post</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost