import Navbar from "../components/navbar"
import Generate from "../components/generator"
export default function Generator():JSX.Element{
    return(
        <>
        <Navbar/>
        <div className='mx-auto max-w-5xl mt-32 mb-20'>
        <div className='px-6 lg:px-8'>
          <div className='mx-auto max-w-5xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-white sm:text-5xl'>
              How to 
              <span className='text-blue-500'> use.</span>
            </h2>
          </div>
        </div>
        
        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-200 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-500'>Step 1</span>
              <span className='text-xl font-semibold text-white'>
                Select your generation model.
              </span>
              <span className='mt-2 text-zinc-400'>
                Currently, we have OpenAI ShapE. We are working on adding new generation models.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-500'>Step 2</span>
              <span className='text-xl font-semibold text-white'>
                Give your textual description of the 3D Prototype.
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

        <Generate/>
        </>
    )
}