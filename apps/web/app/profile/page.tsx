"use client";
import { useAuth } from "../useSession";
import Navbar from "../components/navbar";
import { ArrowRight, Coins, WandSparkles } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  const { session } = useAuth();

  return (
    <>
      <Navbar />

      <div className='flex items-center justify-between p-4 mt-16 mb-16'>
        {/* Image and User Info */}
        <div className='flex items-center flex-grow'>
          {/* Image */}
          <div className='mr-4'>
            <img
              src={session?.user?.image as string}
              alt='image'
              className='rounded-full w-44 h-44 border border-slate-300'
            />
          </div>

          {/* User Info */}
          <div className='text-left ml-4'>
            <h1 className='text-white text-3xl font-semibold flex items-center'>
              <span className='text-blue-600 mr-1'>Hello, </span> {session?.user?.name} 
              <span className="text-sm bg-gradient-to-t from-blue-500 to-black px-2 py-1 ml-2 rounded-full border border-blue-500">Free Trial</span>
            </h1>
            <p className='text-slate-600 text-md pt-4'>
              Email: {session?.user?.email}
            </p>

            <button className='mt-8 px-4 py-2 text-white font-semibold rounded-full border border-blue-500 bg-gradient-to-t from-blue-500 to-black shadow-2xl shadow-blue-500 flex justify-center items-center'>
              <Coins size={18} strokeWidth={3} className='mr-2' /> Remaining Credits: 25
            </button>
          </div>
        </div>

        {/* Pro Button */}
        <div className='bg-slate-200 rounded-3xl p-7 ml-8 w-1/3'>
          <h1 className='text-2xl font-bold mb-3'>Upgrade to Pro</h1>
          <p className='text-sm text-black font-semibold mb-4 w-2/3'>
            Get exclusive benefits such as email support, unlimited tokens, and access to more models.
          </p>
          <Link href="/pricing" className='px-4 py-2 bg-slate-900 text-white text-sm rounded-full font-semibold flex justify-center items-center hover:bg-black transition-all w-2/4'>
            Get Pro version <ArrowRight className="ml-2" size={18} strokeWidth={3}></ArrowRight>
          </Link>
        </div>
      </div>

      {/* Your Creations - To be fetched from DB */}
      <div className='p-4'>
        <h1 className='flex items-center w-full text-left px-4 py-2 text-white text-2xl font-semibold border-b border-slate-500'>
          <WandSparkles className='mr-2' size={20} /> Your Creations
        </h1>
      </div>
      <div className='flex items-center justify-evenly p-4'>
        <div className='flex space-x-4'>
          <div className='w-32 h-32 bg-blue-200 flex items-center justify-center'>
            Box 1
          </div>
          <div className='w-32 h-32 bg-blue-200 flex items-center justify-center'>
            Box 2
          </div>
          <div className='w-32 h-32 bg-blue-200 flex items-center justify-center'>
            Box 3
          </div>
          <div className='w-32 h-32 bg-blue-200 flex items-center justify-center'>
            Box 4
          </div>
        </div>
      </div>
    </>
  );
}
