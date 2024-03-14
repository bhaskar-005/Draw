'use client'
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {  SidebarClose, SidebarIcon, SidebarOpen } from "lucide-react";
import {  getUserInformation } from "@/lib/controller/userController";
import Logout from "./Logout";
import { usePersonStore } from "@/store/store";
import LoadingBar from "react-top-loading-bar";


const Sidebar=  ()=>{

 const userinfo = usePersonStore((state:any)=>state.user);
 const setUserInfo = usePersonStore((state:any)=> state.updateUser);
 const setProject = usePersonStore((state:any)=> state.updateProject);

 const [progress, setProgress] = useState(0);
 const [sidebar , setSidebar] = useState(true);

 const findUserinfo = async()=>{
  if (!userinfo) {
  setProgress(20);
  const information:any = await getUserInformation();
  setProgress(80);
  const ObjInfo = JSON.parse(information);
  
  setUserInfo(ObjInfo);   
  setProject(ObjInfo.project);
  setProgress(100);
  }
 }
 useEffect(()=>{
  findUserinfo();
 },[])
 
 
 
 if(!userinfo){
  return <div className={` relative w-[300px] h-full p-5 flex flex-col gap-4 border-r-[0.5px] border-r-gray-400 bg-white dark:bg-gray-900 ${sidebar ? 'block': 'hidden'}`}>
     <li className="w-[70%] mt-7 h-8 list-none bg-gray-200 rounded-full dark:bg-gray-700"></li>
     <li className="w-full mt-2 list-none h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
     <li className="w-full mt-2 list-none h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
     <li className="w-full mt-2 list-none h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
     {
       <SidebarClose className="absolute right-2 text-gray-700 dark:text-gray-200 size-6 cursor-pointer hover:text-gray-900"  onClick={()=>setSidebar(false)} />
     }
     {
       <SidebarOpen className={`${sidebar ? ' hidden ':' block'}absolute left-2 top-2 text-gray-700 dark:text-gray-200 size-6 cursor-pointer hover:text-gray-900`}  onClick={()=>setSidebar(true)} />
     }
    </div>
 } 
  return (
    <>
    <LoadingBar
        color='#3377ff'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
     {
       <SidebarOpen className={`${sidebar ? ' hidden ':' block'}absolute left-2 top-2 text-gray-700 dark:text-gray-200 size-6 cursor-pointer hover:text-gray-900`}  onClick={()=>setSidebar(true)} />
     }
    <div className= {`h-[100vh]  w-[300px] p-5 border-r-gray-500 dark:border-r-gray-700 border-r-[1.3px] flex flex-col justify-between bg-white dark:bg-gray-900 ${sidebar ? 'block': 'hidden'} `}>
      <div>
        <div className="flex  w-full justify-between items-center">
          <div className="flex items-center gap-2 m-5 ">
            <h1 className="text-[20px] font-[600] ">Draw</h1>
            <div>
              <Badge>{userinfo?.plan}</Badge>
            </div>
          </div>
          {
            <SidebarClose className="text-gray-700 dark:text-gray-200 size-6 cursor-pointer hover:text-gray-900"  onClick={()=>setSidebar(false)} />
          }
        </div>
        <ul className="space-y-1">
          <li>
            <Link
              href="/dashboard/projects"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 hover:bg-opacity-30 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <span className="text-sm font-medium"> Projects </span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/plans"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 hover:bg-opacity-30 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>

              <span className="text-sm font-medium"> Plans </span>
            </Link>
          </li>
           <Logout/>
        </ul>
      </div>

      <div>
        <div className=" my-5 flex flex-row gap-3 items-center cursor-pointer ">
          <div>
            <Avatar>
              <AvatarImage src={userinfo?.picture} alt="@shadcn" />
              <AvatarFallback>{userinfo?.userName.slice(0,1)}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-[17px] font-[600]">{userinfo?.userName}</h1>
            <p className="text-[14px] text-gray-600 dark:text-gray-400 hover:underline ">
              {userinfo?.email}
            </p>
          </div>
        </div>
        <div className="bg-gray-300 dark:bg-gray-700 h-[0.4px] w-full my-2"></div>
        {userinfo?.plan == "free" ? (
          <div className="my-5">
            <Progress value={userinfo?.project.length *20} />
            <p className="text-[13.9px] font-[400] mt-3">
              <span className="font-[600]">{userinfo?.project.length}</span> out of{" "}
              <span className="font-[600]">5</span> files used
            </p>
            <Link href={"/dashboard/plans"}>
              <p className="text-[13px] font-[400] text-gray-700 dark:text-gray-400 cursor-pointer hover:underline">
                Upgrade your plan for unlimited access.
              </p>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
    </>
  );
};

export default Sidebar;
