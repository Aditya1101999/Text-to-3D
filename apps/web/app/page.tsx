"use client";
import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@repo/ui/button";
import { AuroraBackground } from "@repo/ui/aurora-background";
import { FloatingNav } from "@repo/ui/FloatingNav";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { GlobeDemo } from './components/globedemo';
 


export default function Page(): JSX.Element {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    console.log('Sending request to generate 3D text:', inputValue);
  };

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];


  return (
    <div className="overflow-auto min-h-screen">
   <AuroraBackground>
   <FloatingNav navItems={navItems}/>
   <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Convert your 3d dreams into reality
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is supercool
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter your text here"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button className="bg-neutral-500 text-white px-4 py-2 rounded-md mt-4">
          Submit
        </button>
      </motion.div>
   </AuroraBackground>
   <GlobeDemo/>
      </div>
  )
}

function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
