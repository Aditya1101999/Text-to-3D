import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube, ExternalLink } from "lucide-react"; // Import ExternalLink icon

export default function Footer(): JSX.Element {
  return (
    <footer className='w-full mt-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='py-16 flex justify-between items-center flex-col gap-8 lg:flex-row'>
          
          {/* Logo Section */}
          <div className='flex items-center'>
            <img src='/logo.png' alt='Logo' className='h-16 w-16' />
            <Link
              href='/'
              className='flex justify-center text-white text-2xl font-semibold'>
              Render<span className='text-blue-500'>3D</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className='text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500'>
            <li>
              <Link href='/' className='text-slate-400 font-semibold hover:text-white'>
                Render3D
              </Link>
            </li>
            <li className='sm:my-0 my-2'>
              <Link href='/' className='text-slate-400 font-semibold hover:text-white'>
                About
              </Link>
            </li>
            <li>
              <Link href='/pricing' className='text-slate-400 font-semibold hover:text-white'>
                Pricing
              </Link>
            </li>
            <li className='sm:my-0 my-2'>
              <a href='https://github.com' className='text-slate-400 font-semibold hover:text-white flex items-center'>
                Github <ExternalLink className='ml-2' size={18} /> {/* External link icon */}
              </a>
            </li>
            <li>
              <Link href='/generate' className='text-slate-400 font-semibold hover:text-white'>
                Generate
              </Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className='flex gap-4'>
            <a href='https://twitter.com' className='text-slate-300 bg-slate-800 rounded-full p-2 hover:bg-slate-600'>
              <Twitter />
            </a>
            <a href='https://linkedin.com' className='text-slate-300 bg-slate-800 rounded-full p-2 hover:bg-slate-600'>
              <Linkedin />
            </a>
            <a href='https://github.com' className='text-slate-300 bg-slate-800 rounded-full p-2 hover:bg-slate-600'>
              <Github />
            </a>
            <a href='https://youtube.com' className='text-slate-300 bg-slate-800 rounded-full p-2 hover:bg-slate-600'>
              <Youtube />
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className='py-7 border-t border-gray-700'>
          <div className='flex items-center justify-center'>
            <span className='text-gray-400'>
              ©<a href='/'>Render3D</a> 2024-25, All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
