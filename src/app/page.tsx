import Hero from "@/_components/Hero";
import Navbar from "@/_components/Navbar";
import Pricing from "@/_components/Pricing";
import { ArrowLeftIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import sideimg from '../../public/sideimg.png'
import { Github, X } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />

      <div className="w-full flex justify-center dark:bg-gray-900 bg-gradient-to-b dark:from-gray-900 dark:via-gray-900 from-[#D1D1D1] via-[#D1D1D1] to-white py-4">
        <div className=" w-[1300px] flex sm:flex-row flex-col gap-6">
          <div className="bg-[#171717] sm:w-[70%] w-[100%] flex justify-center items-center rounded-xl border-black border-[1px]">
            <img
              className="w-[480px]"
              src="https://assets-global.website-files.com/62d58a323cbc396f06a780aa/652724d77e8a69256e0fdaa4_ai%20diagram%202.gif"
              alt="gif"
            />
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 sm:h-full  sm:w-[30%] w-[100%] rounded-xl overflow-hidden flex justify-center items-center">
            <Image
              src={sideimg}
              alt="sidebar image"
              className=" w-auto h-[350px] rounded-lg "
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center  bg-white dark:bg-gray-900 py-4">
        <div className=" w-[1300px] flex sm:flex-row flex-col gap-6 ">
          <div className="sm:w-[40%] w-full  flex flex-col gap-6 ">
            <div className="sm:h-[50%] w-full bg-gray-100 dark:bg-slate-700 rounded-2xl flex items-center sm:p-12 p-10 text-[19px] font-[500] cursor-pointer ">
              "Perfect your diagrams with precision using our versatile feature,
              making editing a breeze."
            </div>
            <div className="sm:h-[50%] w-full bg-gray-100 dark:bg-slate-700 rounded-2xl flex items-center sm:p-12 p-10 text-[19px] font-[500] cursor-pointer ">
              "Craft professional-grade diagrams effortlessly with our intuitive
              eraser tool"
            </div>
          </div>
          <div className="sm:w-[60%] w-full h-50 bg-gray-100 dark:bg-slate-700 rounded-2xl flex justify-center items-center sm:p-14 p-10 sm:text-[26px] text-[19px]  cursor-pointer font-[500]">
            "Streamline your diagramming process with our intuitive eraser
            feature, allowing you to focus on your ideas without worry."
          </div>
        </div>
      </div>
      {/* Pricing */}
      <div className="w-full flex justify-center py-20 bg-white dark:bg-gray-900 ">
        <div className=" w-[1300px] ">
          <h1 className="flex w-full justify-center text-[40px] font-bold">
            Pricing
          </h1>
          <Pricing />
        </div>
      </div>
      {/* footer */}
      <footer className="bg-white dark:bg-gray-900 flex justify-center py-5">
        <div className="flex justify-between w-[1300px]">
          <p className="mt-8 text-[14px] text-gray-900 dark:text-gray-300 sm:mt-0">
            &copy; 2022. build from scratch by{" "}
            <Link className="font-[600]" href={"https://github.com/bhaskar-005"}>
              bhaskar bhandari
            </Link>
            .
          </p>
          <div className="flex gap-4">
            <Link href={'https://x.com/BsB02266322?t=56DmZEf-ILT0VReOtf1t7g&s=09'} target="_blank" ><TwitterLogoIcon className="size-6 "/></Link>
            <Link href={'https://github.com/bhaskar-005'} target="_blank"><GitHubLogoIcon className="size-6 "/></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
