import React from "react";

export default function Navbar(): JSX.Element {
    return (
        <>
            <nav className="p-10 flex justify-between items-center">
                <h1 className="text-white text-4xl font-bold">Render<span className="text-blue-500">3D</span></h1>
                <div>
                    <ul className="flex gap-8">
                        <li className="text-slate-300 cursor-pointer hover:text-white hover:transition-all">About</li>
                        <li className="text-slate-300 cursor-pointer hover:text-white hover:transition-all">Pricing</li>
                        <li className="text-slate-300 cursor-pointer hover:text-white hover:transition-all">Log in</li>
                        <li className="text-white cursor-pointer hover:underline">Get Started</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
