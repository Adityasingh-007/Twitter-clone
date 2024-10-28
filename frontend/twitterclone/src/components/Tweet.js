import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";



const Tweet = () => {
  return (
    <div className=' border-b border-gray-200'>
        <div>
            <div className=' flex p-4'>
                <Avatar size="50" src="https://designimages.appypie.com/profilepicture/profilepicture-2-portrait-head.jpg" round={true} />
                <div className='ml-2 w-full'>
                    <div className='flex items-center'>
                        <h1 className='font-bold'>Elon Musk</h1>
                        <p className=' text-sm ml-1 text-gray-500'>@elonmusk . 1m</p>
                    </div>
                    <div>
                        <p>Hello Developers Lets connect && grow together</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <div className=' flex items-center  hover:bg-[#1D9BF0] cursor-pointer rounded-2xl p-1'>
                            <div className='p-2'>
                            <FaRegComment size={'20px'} />
                            </div>
                            <p>0</p>
                        </div>
                        <div className=' flex items-center  hover:bg-red-300 cursor-pointer rounded-2xl p-1'>
                            <div className='p-2'>
                            <CiHeart size={'24px'}/>
                            </div>
                            <p>0</p>
                        </div>
                        <div className=' flex items-center  hover:bg-[#1D9BF0] cursor-pointer rounded-2xl p-1'>
                            <div className='p-2'>
                            <CiBookmark size={'24px'} />
                            </div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet