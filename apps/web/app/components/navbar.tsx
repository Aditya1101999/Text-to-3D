import React from "react";
import Link from "next/link";
export default function Navbar(): JSX.Element {
    return (
        <>
            <nav className="p-10 flex justify-between items-center">
                <Link href="/" className="text-white text-4xl font-bold">Render<span className="text-blue-500">3D</span></Link>
                <div>
                    <ul className="flex gap-8">
                        <Link href="/"className="text-slate-300 cursor-pointer hover:text-white hover:transition-all">About</Link>
                        <Link href="/pricing"className="text-slate-300 cursor-pointer hover:text-white hover:transition-all">Pricing</Link>
                        <Link href="/"className="text-slate-300 cursor-pointer hover:text-white hover:transition-all">Log in</Link>
                        <Link href="/"className="text-white cursor-pointer hover:underline">Get Started</Link>
                    </ul>
                </div>
            </nav>
        </>
    );
}
