import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    // We are not going to build the second nav because we do not have all the data of the site like the tutorials/docs
  return (
    <header className="p-5 w-[96vw] sticky top-0 left-[2vw] flex items-center justify-between border-b border-b-gray-200">
      <div className="px-0 lg:pl-4 flex items-center lg:mx-4 cursor-pointer text-purple-700 text-xl font-bold mx-3">
        <Link href={'/'}>CodeWithHarry</Link>
      </div>
      <nav className="flex space-x-5">
        <ul className="flex items-center space-x-5 justify-center">
          <li className="hover:border-purple-700 border-b-2 border-b-transparent transition-all cursor-pointer">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="hover:border-purple-700 border-b-2 border-b-transparent transition-all cursor-pointer">
            <Link href={'/'}>Courses</Link>
          </li>
          <li className="hover:border-purple-700 border-b-2 border-b-transparent transition-all cursor-pointer">
            <Link href={'/'}>Tutorial</Link>
          </li>
          <li className="hover:border-purple-700 border-b-2 border-b-transparent transition-all cursor-pointer">
            <Link href={'/'}>Blog</Link>
          </li>
          <li className="hover:border-purple-700 border-b-2 border-b-transparent transition-all cursor-pointer">
            <Link href={'/'}>Notes</Link>
          </li>
          <li className="hover:border-purple-700 border-b-2 border-b-transparent transition-all cursor-pointer">
            <Link href={'/'}>Contact</Link>
          </li>
          <li className="hover:border-purple-700 border-b-2 border-b-transparent transition-all cursor-pointer">
            <Link href={'/'}>My Gears</Link>
          </li>
          <li className="hover:border-purple-700 border-b-2 border-b-transparent transition-all cursor-pointer">
            <Link href={'/'}>Work With Us</Link>
          </li>
        </ul>
        <div className="modes flex space-x-2">
          <button className="py-2 px-3 bg-purple-700 text-white rounded-md">Dark Mode</button>
          <button className="py-2 px-3 bg-purple-700 text-white rounded-md">Login</button>
          <button className="py-2 px-3 bg-purple-700 text-white rounded-md">Sign Up</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar