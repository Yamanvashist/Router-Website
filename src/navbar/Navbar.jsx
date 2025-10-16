import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react' // lightweight icon lib (install: npm i lucide-react)

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      className="flex justify-between px-6 py-4 bg-black items-center shadow sticky z-50 top-0"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="text-violet-100 font-ethno text-3xl sm:text-4xl">Toast</h1>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex flex-row gap-10 text-white">
        {['/', '/about', '/contact', '/product'].map((path, idx) => {
          const labels = ['Home', 'About', 'Contact Us', 'Product']
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'text-purple-500 font-bold transition duration-200 ease-in'
                  : 'text-white font-bold hover:text-purple-500 transition duration-200 ease-in'
              }
            >
              {labels[idx]}
            </NavLink>
          )
        })}
      </ul>

      {/* Buttons (desktop only) */}
      <div className="hidden sm:flex gap-3">
        <button className="px-6 py-2 rounded-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300">
          Login
        </button>

        <button className="px-6 py-2 rounded-3xl font-bold text-purple-600 bg-white border border-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-300">
          Sign-up
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[70px] left-0 w-full bg-black flex flex-col gap-4 items-center py-4 sm:hidden"
        >
          {['Home', 'About', 'Contact Us', 'Product'].map((label, i) => (
            <NavLink
              key={i}
              to={label === 'Home' ? '/' : `/${label.toLowerCase().replace(' ', '')}`}
              className="text-white font-semibold hover:text-purple-500 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <div className="flex flex-col gap-2 mt-2">
            <button className="px-6 py-2 rounded-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300">
              Login
            </button>
            <button className="px-6 py-2 rounded-3xl font-bold text-purple-600 bg-white border border-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-300">
              Sign-up
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
