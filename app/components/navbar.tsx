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
    <nav className='py-6 px-8 flex justify-between items-center bg-black/30 border-b border-b-slate-700/40'>
      {/* Logo and Title */}
      <div className='flex items-center'>
        <img src='/logo.png' alt='Logo' className='h-12 w-12' />
        <Link href='/' className='text-white text-2xl font-bold'>
          Render<span className='text-blue-600'>3D</span>
        </Link>
      </div>

      {/* Centered Navigation Links */}
      <div className='flex-grow flex justify-center'>
        <ul className='flex gap-4 items-center px-4 py-2 bg-slate-500 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-slate-700'>
          <li>
            <Link href='/' className='text-slate-400 font-semibold hover:text-white px-4 py-2'>
              About
            </Link>
          </li>
          <li>
            <Link href='/pricing' className='text-slate-400 font-semibold hover:text-white px-4 py-2'>
              Pricing
            </Link>
          </li>
          <li>
            <Link href='/' className='text-slate-400 font-semibold hover:text-white px-4 py-2'>
              Github
            </Link>
          </li>
          <li>
            <Link href='/generate' className='text-slate-400 font-semibold hover:text-white px-4 py-2'>
              Generate
            </Link>
          </li>
        </ul>
      </div>

      {/* User Authentication Section */}
      <div>
        {session ? (
          <button onClick={toggleDropdown} className='flex items-center text-white bg-black border border-slate-700 px-4 py-2 rounded-full'>
            {session.user?.name} <ChevronDown className='ml-2' />
            {dropdownOpen && (
              <div className='absolute right-12 mt-60 w-48 bg-black border border-slate-700 rounded-md shadow-lg py-1 z-20'>
                <Link href='/profile' className='flex items-center px-4 py-2 text-white hover:bg-slate-900'>
                  <User className='mr-2' size={16} /> Profile
                </Link>
                <div className='border-t border-slate-700 my-1'></div>
                <Link href='/settings' className='flex items-center px-4 py-2 text-white hover:bg-slate-900'>
                  <Settings className='mr-2' size={16} /> Settings
                </Link>
                <Link href='/help' className='flex items-center px-4 py-2 text-white hover:bg-slate-900'>
                  <HelpCircle className='mr-2' size={16} /> Help
                </Link>
                <div className='border-t border-slate-700 my-1'></div>
                <button onClick={handleSignOut} className='flex items-center w-full text-left px-4 py-2 text-white hover:bg-slate-900'>
                  <LogOut className='mr-2' size={16} /> Sign Out
                  </button>
              </div>
            )}
          </button>
        ) : (
            <Link onClick={handleSignIn} href='/' className='text-white bg-gray-100 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-slate-600 hover:bg-slate-700 px-4 py-2 flex items-center'>
              Get Started <ArrowRight className="ml-2" size={18} strokeWidth={3} />
            </Link>
        )}
      </div>
    </nav>
  );
}