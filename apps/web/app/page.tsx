"use client";
import Navbar from "./components/navbar";
import { StickyScroll } from "../../../packages/ui/src/sticky-scroll-reveal";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Footer from "./components/footer";
import KnowUs from "./components/know-us";
import Link from "next/link";

const content = [
  {
    title: "3D Rendering",
    description:
      "Visualize your designs in lifelike detail. With our 3D rendering capabilities, you can create realistic images and animations that showcase the beauty and functionality of your projects. Impress clients and stakeholders with stunning visuals that bring your ideas to life.",
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <Image
          src='/first.svg'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='3D rendering demo'
        />
      </div>
    ),
  },
  {
    title: "Augmented Reality",
    description:
      "Explore new dimensions with augmented reality. Our platform enables you to integrate your 3D models into AR experiences, bringing your designs into the real world. Engage your audience and transform the way they interact with your products and ideas.",
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <Image
          src='/second.svg'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='3D rendering demo'
        />
      </div>
    ),
  },
];

export default function Page(): JSX.Element {
  return (
    <div>
      <Navbar />


      <div className='grid grid-cols-2 mt-40 h-auto'>
        <div>
          <div className='mb-8 max-w-fit  space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/80 cursor-pointer'>
            <p className='text-sm font-semibold text-gray-700'>
              Currently in development
            </p>
          </div>
          <h1 className='text-5xl text-white font-semibold'>
            Transforming your words
          </h1>
          <h1 className='text-5xl text-white font-semibold leading-loose'>
            into <span className='text-blue-500'>three dimensions.</span>
          </h1>

          <div className='flex gap-4'>
            <Link href="/generate" className='bg-white w-1/3 rounded-md text-center p-3 text-xl hover:bg-blue-500 transition-all hover:text-white cursor-pointer'>
              Try Now
            </Link>
            <a
              href='#know-more'
              className='text-white  p-3 text-xl cursor-pointer hover:underline'>
              Know More
            </a>
          </div>
          <div className='w-full mt-10 mb-4'>
            <h1 className='text-xl font-semibold text-slate-600'>
              Powered by OpenAI
            </h1>
          </div>
        </div>
        <div className='flex justify-center items-center md:w-3/5 h-96 -translate-y-10'>
          {/* <GlobeDemo /> */}
          <Spline className="w-full h-96 flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start -z-10" scene="https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode"></Spline>
        </div>
      </div>

      <div className='relative isolate'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className='relative left-[calc(50%-25rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[25deg] bg-gradient-to-tr from-[#f1f0f0] to-[#0464ff] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.205rem]'
          />
        </div>
      </div>

      
      <div className='mx-auto max-w-5xl mt-60' id='know-more'>
        <div className='px-6 lg:px-8'>
          <div className='mx-auto max-w-5xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-white sm:text-5xl'>
              Create 3D Models in{" "}
              <span className='text-blue-500'>minutes.</span>
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              Render3D is a generative AI-powered platform that makes it faster,
              cheaper, and easier for users to automatically convert text
              descriptions of real-world objects into 3D models.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-200 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-500'>Step 1</span>
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
              <span className='text-sm font-medium text-blue-500'>Step 2</span>
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
              <span className='text-sm font-medium text-blue-500'>Step 3</span>
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
      <div className=' mt-24 p-10'>
        <StickyScroll content={content} />
      </div>

      <KnowUs/>

      <Footer />
    </div>
  );
}
