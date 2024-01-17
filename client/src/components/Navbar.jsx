import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const links = [
        {
            id: 1,
            title: "About",
            url: "/about"
        },
        {
            id: 2,
            title: "Login",
            url: "/login"
        },
        {
            id: 3,
            title: "Sign-up",
            url: "/register"
        },
    ]


  return (
    <>
        <nav className='w-full top-0 left-0 right-0 bg-gray-200'>
        <div className='justify-between px-4 mx-auto lg:max-x-7xl md:items-center md:flex md:px-20'>
                <div>
                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                        <Link to="/" >
                            <h1 className='text-2xl text-black font-semibold'>Blog</h1>
                        </Link>
                        <div className='md:hidden'>
                            <button 
                                className='p-2 text-gray-700 text-2xl hover:border rounded-md outline-none'
                                onClick={() => setNavbar(!navbar)}
                            >
                                { navbar ? (
                                    <IoMdClose width={30} height={30}/>
                                ) : (
                                    <CiMenuFries 
                                        width={30} 
                                        height={30} 
                                        className="hover:font-bold "
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div  
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? 'p-8 md:p-0 block' : 'hidden'
                    }`}>

                    <ul className="h-screen md:h-auto items-center justify-end md:flex ">
                       
                           {
                            links.map((link) => (
                                <li className="pb-4  hover:px-3 hover:uppercase text-xl	 md:text-base text-black py-6 md:px-6  border-b-2 md:border-b-0   border-gray-400">
                                    <Link key={link.id} to={link.url}  onClick={() => setNavbar(!navbar)}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))
                           }
                    
                    </ul>  
                 
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar