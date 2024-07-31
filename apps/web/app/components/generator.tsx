"use client";
import Link from "next/link";
import { useState } from "react";
import {
  WandSparkles,
  ChevronDown,
  ChevronUp,
  SaveIcon,
  InfoIcon,
} from "lucide-react";

export default function Generate(): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("OpenAI ShapE");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectModel = (model: string) => {
    setSelectedModel(model);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className='grid grid-cols-3 mx-auto max-w-full px-8 gap-6 mb-8'>
        {/* Left Grid */}
        <div className='col-span-1 flex flex-col gap-6 bg-slate-900 border border-slate-700 p-8 rounded-lg bg-opacity-30'>
          <h1 className='text-blue-600 font-bold flex'>
            MODEL <InfoIcon width={16} className='ml-2 text-white' />{" "}
          </h1>

          <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='p-4 w-full rounded-md bg-black border border-slate-700 text-white shadow-xl flex justify-between items-center transition-colors'>
              {selectedModel}
              {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isDropdownOpen && (
              <div className='absolute z-10 mt-1 w-full bg-black border border-slate-700 rounded-md shadow-lg'>
                <button
                  onClick={() => selectModel("OpenAI ShapE")}
                  className='w-full text-left p-4 hover:bg-slate-800 text-white transition-colors'>
                  OpenAI ShapE
                </button>
                <button
                  onClick={() => selectModel("VoxelCNN")}
                  className='w-full text-left p-4 hover:bg-slate-800 text-white transition-colors'>
                  VoxelCNN
                </button>
              </div>
            )}
          </div>

          <h1 className='text-blue-600 font-bold flex'>
            TEXT PROMPT <InfoIcon width={16} className='ml-2 text-white' />
          </h1>
          <textarea
            placeholder='Enter textual description'
            className='p-4 rounded-lg bg-black border border-slate-700 text-white shadow-xl h-60 resize-none focus:outline-none focus:border-blue-500 transition-colors'
          />

          <h1 className='text-blue-600 font-bold flex'>
            CREDIT COST <InfoIcon width={16} className='ml-2 text-white' />
          </h1>
          <div className='border border-l-4 border-blue-500 bg-blue-500 bg-opacity-30 p-4 rounded-lg'>
            <h1 className='text-white font-semibold'>Generation Cost: $20</h1>
            <h1 className='text-white font-semibold'>Total Balance: $100</h1>
          </div>

          <button className='p-4 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white mt-5'>
            Generate
          </button>
        </div>

        {/* Right Grid */}
        <div className='col-span-2 flex flex-col rounded-md border-slate-700 border'>
          {/* Options */}
          <div className='flex justify-between items-center border-b border-slate-700 p-3'>
            <Link
              href='/profile'
              className='bg-black border border-slate-600 flex justify-center items-center rounded-md text-white font-semibold px-3 py-2 hover:bg-blue-600 transition-colors'>
              <WandSparkles className='mr-2' width={16} />
              Your Creations
            </Link>
            <div className='flex items-center'>
              <button className='bg-black border border-slate-600 flex justify-center items-center rounded-md text-white font-semibold px-3 py-2 hover:bg-blue-600 transition-colors'>
                <SaveIcon width={16} height={16} className='mr-2' /> Save
              </button>
              
            </div>
          </div>

          {/* For Rendering Purposes */}
          <div className='flex justify-center items-center text-center flex-grow bg-slate-900 bg-opacity-30'>
            <h1 className='text-slate-200 text-xl opacity-30'>
              Your 3D model renders here.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
