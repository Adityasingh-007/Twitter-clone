import React, { useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";

const Login = () => {
  const [isLogin, SetisLogin] = useState(true);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  function loginSignupHandler() {
    SetisLogin(!isLogin);
  }

  async function submitHandler(e) {
    e.preventDefault();
    try{

    if(isLogin){ //login

     const res = await axios.post("http://localhost:8080/api/v1/user/login",{email,password},{
      headers: {
        'Content-Type': "application/json"
      },
      withCredentials: true
    }
     )

     console.log(res);
     console.log(res.data);

    }
    else{

    }
  }
    catch(err){
      console.log(err);;
    }
  }



  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <div className=' flex items-center justify-evenly w-full'>
        <div className='ml-5'>
          <FaXTwitter size={"320px"} />
        </div>
        <div>
          <div className='my-5 mb-10'>
            <h1 className='font-bold text-6xl mb-10'>Happening now</h1>
            <h1 className='font-bold text-3xl mt-7'>Join today.</h1>
          </div>
          <h1 className='mt-4 mb-4 text-2xl font-bold'> {isLogin ? "Login" : "SignUp"}</h1>
          <form onSubmit={submitHandler} className=' flex flex-col w-[55%]'>

            {/* using () and <> after && for more than one rendering element ,This is invalid because React doesn't know how to return two adjacent JSX elements without wrapping them in a parent element or fragment. */}
             
            {!isLogin && (<>
              <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
              <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
            </>
            )}
            <input type="email" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
            <button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white'>Login</button>
            <h1>{isLogin ? "Don't have an account" : "Already have an acccount"},<span onClick={loginSignupHandler} className=' cursor-pointer font-bold text-blue-600'>{isLogin ? "SignUp" : "Login"}</span></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login