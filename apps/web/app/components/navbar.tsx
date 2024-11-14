"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, User, Settings, HelpCircle, LogOut, ArrowRight } from "lucide-react";
import { useAuth } from "../useSession";

export default function Navbar() {
  const { session, handleSignIn, handleSignOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='py-10 flex justify-between items-center'>
      {/* Logo Section */}
      <div className='flex items-center'>
        <img src='/logo.png' alt='Logo' className='h-16 w-16' />
        <Link href='/' className='text-white text-2xl font-bold'>
          Render<span className='text-blue-600'>3D</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className='flex flex-grow justify-center'>
        <ul className='flex gap-4 items-center px-4 py-2 bg-black border border-slate-800 rounded-full'>
          <li className='relative'>
            <Link
              href='/'
              className='text-slate-400 font-semibold cursor-pointer hover:text-white px-4 py-2'>
              About
            </Link>
          </li>
          <li className='relative'>
            <Link
              href='/pricing'
              className='text-slate-400 font-semibold cursor-pointer hover:text-white px-4 py-2'>
              Pricing
            </Link>
          </li>
          <li className='relative'>
            <Link
              href='/'
              className='text-slate-400 font-semibold cursor-pointer hover:text-white px-4 py-2'>
              Github
            </Link>
          </li>
          <li className='relative'>
            <Link
              href='/generate'
              className='text-slate-400 font-semibold cursor-pointer hover:text-white px-4 py-2'>
              Generate
            </Link>
          </li>
        </ul>
      </div>

      {/* User Authentication Section */}
      <div>
        {session ? (
          <ul className='flex gap-8 items-center'>
            <li className='relative'>
              <button
                onClick={toggleDropdown}
                className='flex items-center text-white bg-black border border-slate-700 px-4 py-2 rounded-full'>
                {session.user?.name} <ChevronDown className='ml-2' />
              </button>
              {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-black border border-slate-700 rounded-md shadow-lg py-1 z-20'>
                  <Link
                    href='/profile'
                    className='flex items-center px-4 py-2 text-white hover:bg-slate-900 hover:rounded-md'>
                    <User className='mr-2' size={16} /> Profile
                  </Link>
                  <div className='border-t border-slate-700 my-1'></div>
                  <Link
                    href='/settings'
                    className='flex items-center px-4 py-2 text-white hover:bg-slate-900 hover:rounded-md'>
                    <Settings className='mr-2' size={16} /> Settings
                  </Link>
                  <Link
                    href='/help'
                    className='flex items-center px-4 py-2 text-white hover:bg-slate-900 hover:rounded-md'>
                    <HelpCircle className='mr-2' size={16} /> Help
                  </Link>
                  <div className='border-t border-slate-700 my-1'></div>
                  <button
                    onClick={handleSignOut}
                    className='flex items-center w-full text-left px-4 py-2 text-white hover:bg-slate-900 hover:rounded-md'>
                    <LogOut className='mr-2' size={16} /> Sign Out
                  </button>
                </div>
              )}
            </li>
          </ul>
        ) : (
          <ul className='flex items-center'>
            <li className='relative'>
              <Link
                onClick={handleSignIn}
                href='/'
                className='text-white bg-black border border-slate-800 rounded-full cursor-pointer hover:bg-blue-600 hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:border-blue-500 transition px-4 py-2 flex justify-center items-center'>
                Get Started <ArrowRight className="ml-2" size={18} strokeWidth={3}></ArrowRight>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
