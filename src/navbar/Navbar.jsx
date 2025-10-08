import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Navbar = () => {


    return (
        <motion.nav className='flex justify-evenly p-6 bg-black items-center shadow sticky z-50 top-0'
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>



            <h1 className=' text-violet-100 font-ethno text-4xl'>Toast</h1>

            <ul className='flex flex-row gap-10'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-purple-500 font-bold cursor-pointer transition duration-200 ease-in'
                            : 'text-white font-bold cursor-pointer hover:text-purple-500 transition duration-200 ease-in'
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-purple-500 font-bold cursor-pointer transition duration-200 ease-in'
                            : 'text-white font-bold cursor-pointer hover:text-purple-500 transition duration-200 ease-in'
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-purple-500 font-bold cursor-pointer transition duration-200 ease-in'
                            : 'text-white font-bold cursor-pointer hover:text-purple-500 transition duration-200 ease-in'
                    }
                >
                    Contact Us
                </NavLink>

                <NavLink
                    to="/product"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-purple-500 font-bold cursor-pointer transition duration-200 ease-in'
                            : 'text-white font-bold cursor-pointer hover:text-purple-500 transition duration-200 ease-in'
                    }
                >
                    Product
                </NavLink>
            </ul>


            <div className='flex gap-3'>
                <button className='flex justify-center items-center px-6 py-3 w-[120px] rounded-3xl font-bold font-ethnocentric text-white  bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 cursor-pointer'>
                    Login
                </button>

                <button className='flex justify-center items-center px-6 py-3 w-[120px] rounded-3xl font-bold font-ethnocentric text-purple-600 bg-white hover:from-purple-700 border border-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer'>Sign-up</button>
            </div>

        </motion.nav>
    )
}
