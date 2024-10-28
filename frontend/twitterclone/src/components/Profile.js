import React from 'react'
import Avatar from 'react-avatar';
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className=' w-[50%] border-l border-r border-gray-200'>
      <div>
        <div className='flex items-center py-2'>
        <Link to={'/'} className='p-3 rounded-full  hover:bg-gray-200 hover:cursor-pointer'>
        <BiArrowBack size={'20px'}/>
        </Link>
        <div className='ml-4'>
          <h1 className=' font-bold text-2xl'>Elon Musk</h1>
          <p className='text-sm text-gray-500'>305 posts</p>
        </div>
      </div>
          <img src='https://pbs.twimg.com/profile_banners/1179892477714718721/1589400385/1080x360' alt=''/>
          <div className=' absolute top-48 ml-4 border-4 border-white rounded-full'>
          <Avatar size="140" src="https://designimages.appypie.com/profilepicture/profilepicture-2-portrait-head.jpg" round={true} />
          </div>
          <div className='text-right m-6'>
              <button className='px-4 py-1 hover:bg-gray-200 rounded-full font-bold border border-gray-400'>Edit Profile</button>
          </div>
          <div className='m-4'>
            <h1 className='font-bold text-xl'>Elon Musk</h1>
            <p className=' text-gray-400'>@elonmusk</p>
          </div>
          <div className='m-4 text-sm'>
            <p>Familiar to:World's Geography | History | Computer Science |Sports | Facts | English | GK | #CSS #UPSC #IAS PCS & All Exams Prep..📚jabbArTunio✍️#T20WorldCup</p>
          </div>
      </div>
    </div>
  )
}

export default Profile