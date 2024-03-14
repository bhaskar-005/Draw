import { ArrowBigLeft, ArrowDownLeftIcon, LucideArrowUpLeft, LucideArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div
      className="bg-gray-200 dark:bg-black relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets-global.website-files.com/62d58a323cbc396f06a780aa/653308b56030d3280686f7e9_Noise%20%26%20Texture%20(9)-min-p-800.png')",
      }}
    >
     <section
  key="1"
  className="bg-white bg-opacity-80 dark:bg-slate-900 dark:bg-opacity-80 md:pt-[150px] pt-24 md:pb-52 pb-20 flex flex-col justify-center items-center space-y-12"
>
  <div className="container px-7 md:px-12 relative">
  <img className=' absolute -top-20 right-20  invert dark:invert-0 opacity-75 sm:block hidden w-[200px]' src="https://www.blocknotejs.org/_next/static/media/try.dark.a200a1ff.svg" alt="svg" />
   
    <img
      className="sm:block hidden absolute right-3 bottom-5 w-[80px] opacity-80 invert dark:invert-0"
      src="https://assets-global.website-files.com/62d58a323cbc396f06a780aa/651593780abfac438bc37155_Shapes.svg"
      alt="ai"
    />
    <img
      className="sm:block hidden absolute w-[120px] opacity-80 invert dark:invert-0"
      src="https://assets-global.website-files.com/62d58a323cbc396f06a780aa/6528593a2397720159ddaeee_Shapes%20(8).svg"
      alt="img"
    />
    <img
      className="sm:block hidden absolute w-[120px] -bottom-20 left-40 opacity-80 invert dark:invert-0"
      src='https://assets-global.website-files.com/62d58a323cbc396f06a780aa/651593780abfac438bc371c0_Selected%20Shape.svg'
      alt="img"
    />
    
    <div className="flex flex-col items-center space-y-8 text-center">
      <div className="text-gray-200 text-[13px] border-[0.2px] font-[500] border-gray-600 bg-gray-500 dark:bg-[#253B4D] py-1 px-4 rounded-3xl">
        See what’s new <span className="text-gray-600 dark:text-gray-400"> | </span>{" "}
        <span className="text-blue-300">AI Diagrams</span>
      </div>
      <div className="space-y-10">
        <div className="text-gray-700 dark:text-blue-200 text-3xl font-bold sm:text-5xl xl:text-7xl/none text-center relative">
          Documents & diagrams <br />
          <span className="text-gray-700 dark:text-gray-300">for engineering teams</span>
        </div>

        <p className="mb-10 mx-auto max-w-[700px] text-lg text-gray-500 md:text-2xl text-center">
          All-in-one markdown editor, collaborative canvas,{" "}
          <br className="sm:block hidden" /> and diagram-as-code builder
        </p>
      </div>
      <div className="space-y-6 space-x-2 ">
       
        
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 py-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/dashboard/projects"
        >
          Get Started <LucideArrowUpRight className='size-4 ml-1'/>
        </Link>
      </div>
    </div>
  </div>
</section>

   </div>
  );
}

export default Hero;
