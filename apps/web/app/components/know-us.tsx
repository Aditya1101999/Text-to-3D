
import Link from "next/link";
import { GlobeDemo } from "./globedemo";
export default function KnowUs(): JSX.Element{
    return(
        <>
        <div className="grid grid-cols-2 mt-40 bg-slate-800 border-2 border-slate-800 rounded-md bg-opacity-40 cursor-pointer p-8">
            <div>
                <h1 className="text-white text-5xl font-extralight p-12">Interested in giving Render<span className="text-blue-500">3D</span> a try?</h1>
                <p className="text-white text-md p-12 text-justify">Creating 3D content for augmented reality projects is a costly and time-consuming process. With Render3D, you can generate 3D models from text quick and easy.
                <br></br><br></br>Generative AI-powered platform that makes it faster, cheaper, and easier for users to automatically convert text descriptions of real-world objects into 3D models.
                </p>

                <div className="p-12 flex gap-12 items-center">
                    <Link href="/generate" className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-md">Try Render3D now</Link>
                    <button className="bg-slate-200 bg-opacity-5 border-2 border-slate-600 text-white p-4 rounded-md">Let's have a chat</button>
                </div>
            </div>

            <div>
                <GlobeDemo/>
            </div>
        </div>
        </>
    )
}