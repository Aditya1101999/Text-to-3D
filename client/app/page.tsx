"use client";
import Navbar from "./components/navbar";
import { WandSparkles } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";


const ExpertiseHeader = dynamic(() => import("./components/expertise"), {
  ssr: true,
  loading: () => <p className="bg-white text-black px-4 py-2 rounded-full">Asset Loading</p>
});

const KnowHeader = dynamic(() => import("./components/know-us"), {
  ssr: true,
  loading: () => <p className="bg-white text-black px-4 py-2 rounded-full">Asset Loading</p>
});

const FooterHeader = dynamic(() => import("./components/footer"), {
  ssr: true,
  loading: () => <p className="bg-white text-black px-4 py-2 rounded-full">Asset Loading</p>
});

export default function Page(): JSX.Element {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Introduction Section */}
      <div className='h-full mt-24 mx-auto max-w-7xl flex flex-col items-center justify-center text-center'>
        <div className="mb-4 px-6 py-2 rounded-full border border-blue-500 bg-gradient-to-t from-blue-500/10 via-slate-900/10 to-blue-500/10 text-blue-200 text-sm">
          <h1 className="flex justify-center items-center">
            <WandSparkles className="mr-2" size={18} />
            Currently in beta production.
          </h1>
        </div>

        <div className="text-center">
          <h1 className='text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-slate-500 to-slate-50 mt-2 max-w-7xl leading-tight'>
            Reimagine with{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-t from-slate-500 to-slate-50'>
              Render3D
            </span>
          </h1>
          <p className='text-xl text-slate-400 font-medium mt-4 max-w-4xl'>
            Generate 3D models faster with AI.
          </p>
        </div>
      </div>

      <div className="mt-8 max-w-7xl mx-auto flex justify-center items-center text-center">
        <Image src="/grid.png" width={1326} height={688} alt="Showcase Image"></Image>
      </div>


      {/* How It Works Section */}
      <div className='mx-auto max-w-7xl mt-36' id='know-more'>
        <div className='px-6 lg:px-8'>
          <div className='mx-auto max-w-5xl text-center'>
            <h1 className='text-blue-600 font-semibold tracking-widest'>
              {`[ HOW IT WORKS ]`}
            </h1>
            <h2 className='mt-8 font-bold text-4xl text-white sm:text-5xl'>
              Create 3D Models in{" "}
              <span className='text-blue-600'>minutes.</span>
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              Render3D is a generative AI-powered platform that makes it faster,
              cheaper, and easier for users to automatically convert text
              descriptions of real-world objects into 3D models.
            </p>
          </div>
        </div>

        {/* Steps */}
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
      <ExpertiseHeader />

      {/* Contact Us */}
      <KnowHeader />

      {/* Footer */}
      <FooterHeader />
    </>
  );
}
