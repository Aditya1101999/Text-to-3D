export default function Generate(): JSX.Element {
  return (
    <>
       <div className='mx-auto max-w-5xl mt-20'>
        <div className='px-6 lg:px-8'>
          <div className='mx-auto max-w-5xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-white sm:text-5xl'>
              How to 
              <span className='text-blue-500'> use.</span>
            </h2>
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

      <div className='grid grid-cols-2 gap-8 mt-32 '>
      <div className='flex flex-col gap-4 bg-slate-800 p-8 rounded-xl bg-opacity-30'>
        <h1 className="text-white font-mono">Choose your Generation model:</h1>
        <select className='p-4 rounded-md bg-slate-800 border-2 border-slate-600 text-white shadow-xl'>
          <option value='car'>OpenAI ShapE</option>
          <option value='house'>VoxelCNN (Coming Soon)</option>
        </select>

        <h1 className="mt-2 text-white font-mono">Enter textual description to be generated:</h1>
        <textarea
          placeholder='Enter textual description'
          className='p-4 rounded-lg bg-slate-800 border-2 border-slate-600 text-white shadow-xl h-60'
        />

        <button className='p-4 rounded-lg bg-blue-600 text-white shadow-xl mt-5'>
          Generate
        </button>
      </div>

      {/* Right Grid */}
      <div className='flex justify-center items-center text-center rounded-lg bg-slate-800 border-2 border-slate-700 border-dashed shadow-xl bg-opacity-30'>
        <h1 className='text-slate-200 text-xl opacity-20'>Your 3D model renders here.</h1>
      </div>
    </div>
    </>
  );
}
