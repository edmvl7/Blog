import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import image from '../assets/images/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { URL } from '../url';
import userContext, { userContextActions } from '../redux/userContext';




const Login = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(userContextActions.signInFail('Field entry is required.'));
    }
    try {
      dispatch(userContextActions.signInStart())
      const res = await fetch(URL+'/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if (data.success === false) {
        dispatch(userContextActions.signInFail(data.message));
      }
      if (res.ok) {
        dispatch(userContextActions.signInSuccess(data));
        navigate('/home');
      }

    }
    catch (error) {
        dispatch(userContextActions.signInFail(error.message))
    }
  }

  return (
   <>
   <div className='block md:flex h-[90%]'>
      <div className='hidden md:flex h-screen  w-full bg-blue-400'>
        <img src={image} alt="image" className="h-full w-full bg-contain"/>
      </div>
      <div className=' w-full md:w-[80%] px-12 py-16 md:px-20'>
        <h1 className='text-3xl text-center'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='mt-10 space-y-5'>
            <input type="email" placeholder='Email' id='email' 
              onChange={handleChange}
              className='w-full h-10 px-4 rounded-lg border-2 outline-0'
            />
            <input type="password" placeholder='Password' id='password' 
              onChange={handleChange}
              className='w-full h-10 px-4 rounded-lg border-2 outline-0'
            />
          </div>
          <button className='w-full mt-10 px-4 py-4 rounded-lg  text-lg font-bold text-white bg-[#508aaf]  hover:bg-blue-200 hover:text-black'>Login</button>
          <button className='w-full mt-3 px-4 py-4 rounded-lg text-lg font-semibold border flex justify-center hover:bg-[#FCF9F9]'> <FaGoogle className='mt-1 me-3' />Log with google</button>
              
          <div className="flex justify-center items-center space-x-3 mt-4 text-sm">
            <p>Do not have an account yet? </p>
            <p className="text-gray-500 hover:text-black "><Link to="/register"> Sign up</Link></p>
          </div>
        </form>
      </div>
   </div>
   
   </>
  )
}

export default Login