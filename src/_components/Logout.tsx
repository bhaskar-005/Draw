import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import CustomAlertDialog from "./AlertDialog";

const Logout = () => {
  return (
    <>
      {/* <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-gray-700"
              >
                <LogOut className="size-[16px] text-gray-600" /> Log out
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to log out?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Logging out will end your current session and require you to
                  sign in again to access your account.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <LogoutLink>
                   Log out
                   </LogoutLink>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog> */}

      <CustomAlertDialog 
       title={' Are you sure you want to log out?'}
       dialogDescription={'Logging out will end your current session and require you to sign in again to access your account.'}
       logout={true}
      >
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 hover:bg-opacity-30 hover:text-gray-800"
        >
          <LogOut className="size-[16px] text-gray-600 dark:text-gray-300" /> Log out
        </Button>
      </CustomAlertDialog>
    </>
  );
};

export default Logout;
