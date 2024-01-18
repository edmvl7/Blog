import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import image from '../assets/images/login.jpg'
import {Link, useNavigate } from 'react-router-dom'
import { URL } from '../url';

const Register = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Field entry is required.')
    }
    try {
      const res = await fetch(URL+'/auth/register', {
        method: 'POST',
        headers:  { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      if (res.ok){
        navigate('/login')
      }
    } catch (error)  {
      setErrorMessage(error.message);

    }
  }

  return (
    <>
      <div className='block md:flex h-[90%]'>
        {/* left */}
        <div className=' w-full md:w-[80%] px-12 py-16 md:px-20'>
          <h1 className='text-3xl text-center'>Create account</h1>
          <form onSubmit={handleSubmit}>
            <div className='mt-10 space-y-5'>
              <input type="text" placeholder='Username' id='username' 
                onChange={handleChange}
                className='w-full h-10 px-4 rounded-lg border-2 outline-0'
              />
              <input type="email" placeholder='Email' id='email' 
                onChange={handleChange}
                className='w-full h-10 px-4 rounded-lg border-2 outline-0'
              />
              <input type="password" placeholder='Password' id='password' 
                onChange={handleChange}
                className='w-full h-10 px-4 rounded-lg border-2 outline-0'
              />
            </div>
            <button className='w-full mt-10 px-4 py-4 rounded-lg  text-lg font-bold text-white bg-[#508aaf]  hover:bg-blue-200 hover:text-black'>Create my account</button>
            <button className='w-full mt-3 px-4 py-4 rounded-lg text-lg font-semibold border flex justify-center hover:bg-[#FCF9F9]'> <FaGoogle className='mt-1 me-3' />Create with google</button>
          </form>
          <p className='mt-6 text-xs text-gray-400'>When signing up, you agree to the <span className='text-blue-500 hover:text-blue-400 hover:underline'>Terms of Service</span> and <span className='text-blue-500 hover:text-blue-400 hover:underline'>Privacy Policy</span> , including the <span className='text-blue-500 hover:text-blue-400 hover:underline'>use of cookies</span>.
          </p>

          <div className="flex justify-center items-center space-x-3 mt-4 text-sm">
                    <p>Vous avez déjà un compte?</p>
                    <p className="text-gray-500 hover:text-black "><Link to="/register">Se connecter</Link></p>
              </div>
          

        </div>
        {/* right */}
        <div className='hidden md:flex h-screen  w-full bg-blue-400'>
        <img src={image} alt="image" className="h-full w-full bg-contain"/>

        </div>
      </div> 
    </>
  )
}

export default Register