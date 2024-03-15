'use client'
import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { Mail } from "lucide-react";
import { ModeToggle } from "./ThemeTogle";
import Link from "next/link";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { DashboardIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const {isAuthenticated,user} = useKindeBrowserClient();
  return (
    <header className="fixed top-0 bg-white dark:bg-gray-900 border-b-[1px] border-b-gray-400 backdrop-blur-md bg-opacity-30 dark:bg-opacity-50 w-full z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-black dark:text-white" href="#">
              <h1 className="text-[25px] font-[600] ">Draw</h1>
            </Link>
          </div>

          <div className=" flex items-center gap-4">
            <ModeToggle />

            {isAuthenticated ? (
              <div className="flex flex-row  gap-4">
                <Link href={"/dashboard/projects "}>
                  <Button>
                    <DashboardIcon className="size-" />
                  </Button>
                </Link>
                <Link href={"/dashboard/projects"}>
                  <img
                    src={user?.picture ? user.picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1200px-Windows_10_Default_Profile_Picture.svg.png'} 
                    alt="userimg"
                    className="h-[35px] w-[35px] rounded-full"
                  />
                </Link>
              </div>
            ) : (
              <LoginLink>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
              </LoginLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
