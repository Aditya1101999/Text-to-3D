import Link from "next/link";
import { GlobeDemo } from "./globedemo";
import { ExternalLink, MessageCircleMore } from "lucide-react";

export default function KnowUs(): JSX.Element {
  return (
    <>
      <div className='mx-auto max-w-7xl mt-32'>
        <div className='flex justify-center items-center'>
          <h1 className='text-blue-600 font-semibold tracking-widest text-glow'>
            {`[ KNOW US ]`}
          </h1>
        </div>
        <div className='flex justify-center items-center mt-8'>
          <h1 className='text-white text-5xl font-semibold'>
            Connect <span className='text-blue-600'>with</span> us.
          </h1>
        </div>

        {/* Card */}
        <div
          className='group grid grid-cols-2 mt-24 border border-slate-600 rounded-3xl cursor-pointer p-8 transition-all hover:border-slate-400'
          >
          <div>
            <h1 className='text-white text-5xl font-semibold p-12'>
              Interested in giving Render
              <span className='text-blue-600'>3D</span> a try?
            </h1>
            <p className='text-white text-md p-12 text-justify'>
              Creating 3D content for augmented reality projects is a costly and
              time-consuming process. With Render3D, you can generate 3D models
              from text quick and easy.
              <br></br>
              <br></br>Generative AI-powered platform that makes it faster,
              cheaper, and easier for users to automatically convert text
              descriptions of real-world objects into 3D models.
            </p>

            <div className='p-12 flex gap-12 items-center'>
              <Link
                href='/generate'
                className='text-white border border-blue-500 bg-blue-500 p-4 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all'>
                Try Render3D now{" "}
                <ExternalLink size={18} className='ml-2'></ExternalLink>
              </Link>
              <button className='bg-slate-900 bg-opacity-5 border-2 border-slate-600 shadow-lg text-white p-4 rounded-full hover:bg-slate-700 transition-all flex justify-center items-center'>
                Let's have a chat{" "}
                <MessageCircleMore
                  size={18}
                  strokeWidth={3}
                  className='ml-2'></MessageCircleMore>
              </button>
            </div>
          </div>

          <div>
            <GlobeDemo />
          </div>
        </div>
      </div>
    </>
  );
}
