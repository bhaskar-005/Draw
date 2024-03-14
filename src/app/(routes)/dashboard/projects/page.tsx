'use client'
import React, { useEffect, useState } from "react";
import SearchInput from "@/_components/SearchInput";
import Createfile from "@/_components/Createfile";
import Link from 'next/link'
import {  Delete, DeleteIcon,  LucideDelete, MoreVertical, Trash } from "lucide-react";
import { getUserInformation } from "@/lib/controller/userController";
import { usePersonStore } from "@/store/store";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import CustomAlertDialog from "@/_components/AlertDialog";
import { ModeToggle } from "@/_components/ThemeTogle";


const Projects = () => {
  const projects = usePersonStore((state:any)=> state.project);
  const userinfo = usePersonStore((state:any)=>state.user);
 const deleteProject = (fileId:any)=>{
  console.log(fileId);
  //TODO
 }
  return (
    <div>
      <section className="w-full h-20 flex justify-end  items-center">
        <div className="flex flex-row gap-2 items-center">
          <ModeToggle/>
          <div>
            <SearchInput />
          </div>
          <Createfile userInfo={userinfo} />
        </div>
      </section>
      <div>
        <h2 className="text-[19px] font-[600] my-3 mx-3">Projects</h2>
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 text-sm">
  <thead className="ltr:text-left rtl:text-right">
    <tr>
      <td className="whitespace-nowrap text-[13.5px] px-4 py-2 font-medium text-gray-900 dark:text-gray-300">
        File Name
      </td>
      <td className="sm:block hidden whitespace-nowrap text-[13.5px] px-4 py-2 font-medium text-gray-900 dark:text-gray-300">
        Created at
      </td>
      <td className="whitespace-nowrap text-[13.5px] px-4 py-2 font-medium text-gray-900 dark:text-gray-300">
        Author
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-gray-300"></td>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
    {projects ? (
      projects.length > 0 ? (
        projects.map((data: any, index: any) => (
          <tr key={index} className={index % 2 === 0 ? " dark:hover:bg-gray-900" : " dark:bg-gray-900 dark:bg-opacity-40"}>
          <td className="whitespace-nowrap px-4 py-2 text-[14.2px] font-medium text-gray-800 dark:text-gray-200">
            <Link href={`/workspace/${data.fileId}`}>{data.fileName}</Link>
          </td>
          <td className="sm:block hidden whitespace-nowrap px-4 py-2 text-[13px] text-gray-700 dark:text-gray-400">
            <Link href={`/workspace/${data.fileId}`}>{new Date(data.createdAt).toString().slice(0, 15)}</Link>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-[13px] text-gray-700 dark:text-gray-400">
            <Link href={`/workspace/${data.fileId}`}>{data.userName}</Link>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-[13px] text-gray-700 dark:text-gray-400">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MoreVertical className="size-5 text-[13.5px]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <CustomAlertDialog
                    logout={false}
                    title={"Delete Project"}
                    dialogDescription={"Are you sure you want to delete this project? This action cannot be undone."}
                    buttonText={'Delete'}
                    buttonOnClick={()=>deleteProject(data.fileId)}
                  >
                    <DropdownMenuItem className='hover:bg-red-200'>
                      <Trash className="size-4 mr-3" />
                      Delete
                    </DropdownMenuItem>
                  </CustomAlertDialog>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </td>
        </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4} className="text-center">
            No files found
          </td>
        </tr>
      )
    ) : (
      <>
        <tr className="">
          <td className="text-center sm:block hidden">
            <li className="w-full mt-2 list-none h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          </td>
          <td className="text-center">
            <li className="w-full mt-2 list-none h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          </td>
          <td className="text-center">
            <li className="w-full mt-2 list-none h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          </td>
        </tr>
        <tr className="">
          <td className="text-center sm:block hidden">
            <li className="w-full mt-2 list-none h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          </td>
          <td className="text-center">
            <li className="w-full mt-2 list-none h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          </td>
          <td className="text-center">
            <li className="w-full mt-2 list-none h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          </td>
        </tr>
      </>
    )}
  </tbody>
</table>

        </div>
      </div>
    </div>
  );
};

export default Projects;
