import React from 'react';

export default function Footer(): JSX.Element {
    return (
        <footer className="text-black p-8 mt-36">
            <div className="container mx-auto flex justify-between gap-8">
                <div className="w-1/3">
                    <h3 className="text-xl font-bold text-white">Render<span className='text-blue-500'>3D</span></h3>
                    <p className="mt-4 text-slate-500">Transforming your words into three dimensions</p>
                </div>
                <div className="w-1/3">
                    <h3 className="text-xl font-bold text-white">Terms of Policy & Privacy</h3>
                    <ul className="mt-4">
                        <li><a href="/terms" className="text-gray-500 hover:text-white">Terms of Service</a></li>
                        <li><a href="/privacy" className="text-gray-500 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="w-1/3">
                    <h3 className="text-xl font-bold text-white">Social Links & Subscribe</h3>
                    <ul className="mt-4 flex">
                        <li className="mr-4"><a href="/facebook" className="text-gray-200 hover:text-white">Facebook</a></li>
                        <li className="mr-4"><a href="/twitter" className="text-gray-200 hover:text-white">Twitter </a></li>
                        <li className="mr-4"><a href="/instagram" className="text-gray-200 hover:text-white">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
