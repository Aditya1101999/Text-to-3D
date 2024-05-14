export default function Generator(): JSX.Element {
  return (
    <>
      <div className='mt-36'>
        <h1 className='text-5xl text-white font-semibold'>Try it</h1>
      </div>
      <div className='flex justify-center text-center items-center mt-10'>
        <h1 className='text-md text-slate-600 font-semibold w-3/5'>
          Just provide a description for the 3D model, and the generative
          AI-powered model would create a 3D prototype for you.
        </h1>
      </div>

      <div className='flex gap-8 mt-20 w-full'>
        {/* Input Div */}
        <div className='w-full'>
          <textarea
            placeholder='Give description of the 3D Model. eg. A car'
            className='w-full p-4 h-80 rounded-lg bg-slate-500 border-2 border-slate-600 text-white shadow-xl'></textarea>
        </div>

        {/* Result Div */}
        <div className='w-full h-80 flex justify-center items-center text-center rounded-lg bg-slate-800 border-2 border-slate-800 border-dashed shadow-xl'>
          <h1 className="text-slate-200 text-xl">Your Output Appears here.</h1>
        </div>
      </div>
    </>
  );
}
