import React from 'react'

export const Navbar = () => {


    return (
        <nav className='flex justify-between p-6 bg-black items-center'>

            <h1 className=' text-violet-100 font-ethno text-4xl'>Toast</h1>

            <ul className='flex flex-row gap-10 '>
                <li className='text-white font-bold cursor-pointer hover:text-purple-500 transition duration-200 ease-in'>Home</li>
                <li className='text-white font-bold cursor-pointer hover:text-purple-500 transition duration-200 ease-in'>About</li>
                <li className='text-white font-bold cursor-pointer hover:text-purple-500 transition duration-200 ease-in'>Contact Us</li>
                <li className='text-white font-bold cursor-pointer hover:text-purple-500 transition duration-200 ease-in'>Product</li>
            </ul>

            <div className='flex gap-3'>
                <button className='flex justify-center items-center px-6 py-3 w-[120px] rounded-3xl font-bold font-ethnocentric text-white  bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 cursor-pointer'>
                    Login
                </button>

                <button className='flex justify-center items-center px-6 py-3 w-[120px] rounded-3xl font-bold font-ethnocentric text-purple-600 bg-white hover:from-purple-700 border border-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer'>Sign-up</button>
            </div>

        </nav>
    )
}
