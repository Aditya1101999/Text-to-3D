import { LoaderIcon } from "lucide-react";
import Image from 'next/image';

export default function Expertise() {
  return (
    <>
      <div className='mx-auto max-w-7xl mt-32'>
        <div className='flex justify-center items-center'>
          <h1 className='text-blue-600 font-semibold tracking-widest text-glow'>
            {`[ READY TO GET STARTED ]`}
          </h1>
        </div>
        <div className='flex justify-center items-center mt-8'>
          <h1 className='text-white text-5xl font-semibold'>
            What we are <span className='text-blue-600'>working</span> on
          </h1>
        </div>

        <div className='grid grid-cols-2 gap-7 mt-24'>
          <div className='px-8 rounded-3xl p-8 border border-blue-500 shadow shadow-blue-500 bg-black/20'>
            <div className='flex justify-center mt-8'>
              <button className='px-4 py-2 text-white font-semibold rounded-full border border-blue-500 bg-gradient-to-t from-blue-500 to-black shadow-2xl shadow-blue-500 flex justify-center items-center'>
                <LoaderIcon size={18} className="mr-2" strokeWidth={3} /> May 2024: In Progress 
              </button>
            </div>
            <Image
              src='/first.png'
              alt='3D Rendering'
              className='rounded-lg w-full'
              width={500}
              height={500}
              layout="responsive"
            />
            <h2 className='text-white text-2xl font-bold mt-8'>3D Rendering</h2>
            <p className='text-slate-600 mt-8'>
              Visualize your designs in lifelike detail. With our 3D rendering
              capabilities, you can create realistic images and animations that
              showcase the beauty and functionality of your projects. <br></br>
              <br></br>Impress clients and stakeholders with stunning visuals
              that bring your ideas to life.
            </p>
          </div>

          <div className='px-8 rounded-3xl p-8 border border-slate-800 bg-black/20'>
            <div className='flex justify-center mt-8'>
              <button className='px-4 py-2 text-white font-semibold rounded-full border border-blue-500 bg-gradient-to-t from-blue-500 to-black shadow-2xl shadow-blue-500 flex justify-center items-center'>
                <LoaderIcon className="mr-2" size={18} strokeWidth={3} /> 2024: In Progress
              </button>
            </div>
            <Image
              src='/second.png'
              alt='Augmented Reality'
              className='rounded-lg w-full'
              width={500}
              height={500}
              layout="responsive"
            />
            <h2 className='text-white text-2xl font-bold mt-8'>Augmented Reality</h2>
            <p className='text-slate-600 mt-8'>
              Explore new dimensions with augmented reality. Our platform
              enables you to integrate your 3D models into AR experiences,
              bringing your designs into the real world. <br></br>
              <br></br>Engage your audience and transform the way they interact
              with your products and ideas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
