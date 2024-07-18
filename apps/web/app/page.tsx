"use client";
import Navbar from "./components/navbar";
import { WandSparkles, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import Footer from "./components/footer";
import KnowUs from "./components/know-us";
import Link from "next/link";
import Expertise from "./components/expertise";

const SplineDesign = dynamic(() => import("./components/SplineDesign"), {
  ssr: false,
});

export default function Page(): JSX.Element {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Introduction Section */}
      <div className='grid grid-cols-2 mt-40 h-auto'>
        <div>
          <h1 className='text-5xl text-white font-semibold mt-12'>
            Transforming your words
          </h1>
          <h1 className='text-5xl text-white leading-loose font-semibold'>
            into <span className='text-blue-600'>three dimensions.</span>
          </h1>

          <div className='flex gap-4'>
            <Link
              href='/generate'
              className='bg-white w-1/4 h-1/4 rounded-full text-center px-4 py-2 text-md hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg transition-all hover:text-white cursor-pointer flex items-center justify-center'>
              Generate
              <WandSparkles className='ml-2' width={16} />
            </Link>
            <a
              href='#know-more'
              className='text-white px-4 py-2 text-md cursor-pointer hover:underline flex justify-center items-center'>
              Know More{" "}
              <ExternalLink
                size={18}
                strokeWidth={3}
                className='ml-2'></ExternalLink>
            </a>
          </div>
          <div className='w-full mt-5 mb-4'>
            <h1 className='text-md text-slate-600'>Powered by OpenAI</h1>
          </div>
        </div>

        {/* Spline Scene */}
        <div className='w-full h-96 flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start -translate-x-20 -translate-y-20'>
          <SplineDesign />
        </div>
      </div>

      <div className='mx-auto max-w-7xl mt-56' id='know-more'>
        <div className='px-6 lg:px-8'>
          <div className='mx-auto max-w-5xl sm:text-center'>
            <div className='flex justify-center items-center'>
              <h1 className='text-blue-600 font-semibold tracking-widest text-glow'>
                {`[ HOW IT WORKS ]`}
              </h1>
            </div>

            <h2 className='mt-8 font-bold text-4xl text-white sm:text-5xl'>
              Create 3D Models in{" "}
              <span className='text-blue-600'>minutes.</span>
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              Render3D is a generative AI-powered platform that makes it faster,
              cheaper, and easier for users to automatically convert text
              descriptions of real- objects into 3D models.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-200 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Step 1</span>
              <span className='text-xl font-semibold text-white'>
                No Sign up for an account
              </span>
              <span className='mt-2 text-zinc-400'>
                Explore our free plan. No hidden charges.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Step 2</span>
              <span className='text-xl font-semibold text-white'>
                Give your textual description of the 3D Prototype
              </span>
              <span className='mt-2 text-zinc-400'>
                We&apos;ll process your query in minutes.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Step 3</span>
              <span className='text-xl font-semibold text-white'>
                Interact with the 3D Prototype
              </span>
              <span className='mt-2 text-zinc-400'>
                It&apos;s that simple. Interact with the 3D Prototype using
                Three.js interface.
              </span>
            </div>
          </li>
        </ol>
      </div>

      {/* What We Do */}
      <Expertise />

      {/* Contact Us */}
      <KnowUs />

      {/* Footer */}
      <Footer />
    </>
  );
}
