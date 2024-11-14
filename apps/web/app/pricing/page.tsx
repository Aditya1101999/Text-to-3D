"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import KnowUs from "../components/know-us";
export default function Pricing(): JSX.Element {
  return (
    <>
      <Navbar />

        <div className="flex justify-center items-center text-center mt-8 mx-auto max-w-7xl">
            <h1 className="text-xl text-blue-600 font-bold">Pricing</h1>
        </div>
        <div className="flex justify-center items-center text-center mt-8">
            <h1 className="text-5xl text-white font-bold">Affordable Pricing for everyone</h1>
        </div>

        <div className="flex justify-center items-center text-center mt-8">
            <h1 className="text-md text-white font-extralight">Choose an affordable plan which suits your needs.</h1>
        </div>

      <div className='px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-2 md:gap-8'>
          <div className=' rounded-2xl border border-gray-800 shadow-sm bg-black' >
            <div className='p-6 sm:px-8'>
              <h2 className='text-lg font-medium text-gray-200'>Basic Plan</h2>

              <p className='mt-2 sm:mt-4'>
                <strong className='text-3xl font-bold text-gray-200 sm:text-4xl'>
                  FREE
                </strong>
              </p>

              <a
                className='mt-4 block rounded-full border border-blue-600 px-12 py-3 text-center text-sm font-medium text-white  hover:bg-blue-700 transition-all sm:mt-6'
                href='#'>
                Get Started
              </a>
            </div>

            <div className='p-6 sm:px-8'>
              <p className='text-lg font-medium text-gray-500 sm:text-xl'>
                What's included:
              </p>

              <ul className='mt-2 space-y-2 sm:mt-4'>
                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 text-blue-700'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>

                  <span className='text-gray-700'>
                    {" "}
                    Unlimited access to basic model{" "}
                  </span>
                </li>

                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 text-blue-700'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>

                  <span className='text-gray-700'> 50 tokens per month </span>
                </li>

                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 text-blue-700'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>

                  <span className='text-gray-700'> Email support </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan Bracket */}
          <div className=' rounded-2xl border-2 border-blue-600 shadow-sm bg-black'>
            <div className='p-6 sm:px-8'>
              <h2 className='text-lg font-medium text-gray-200'>Pro Plan</h2>

              <p className='mt-2 sm:mt-4'>
                <strong className='text-3xl font-bold text-gray-200 sm:text-4xl'>
                  5$
                </strong>

                <span className='text-sm font-medium text-gray-200'>
                  /month
                </span>
              </p>

              <a
                className='mt-4 block rounded-full border bg-blue-600 border-blue-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition-all sm:mt-6'
                href='#'>
                Get Started
              </a>
            </div>

            <div className='p-6 sm:px-8'>
              <p className='text-lg font-medium text-gray-500 sm:text-xl'>
                What's included:
              </p>

              <ul className='mt-2 space-y-2 sm:mt-4'>
                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 text-indigo-700'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>

                  <span className='text-gray-700'> More advanced models </span>
                </li>

                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 text-indigo-700'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>

                  <span className='text-gray-700'>
                    {" "}
                    Unlimited Number of Tokens{" "}
                  </span>
                </li>

                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 text-indigo-700'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>

                  <span className='text-gray-700'> Email support </span>
                </li>

                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 text-indigo-700'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>

                  <span className='text-gray-700'> Quick Updates </span>
                </li>

                <li className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 text-indigo-700'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>

                  <span className='text-gray-700'> Profile Management </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <KnowUs />
      <Footer />
    </>
  );
}
