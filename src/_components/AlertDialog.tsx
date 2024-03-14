'use client'
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
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React, { useState }  from 'react';
const CustomAlertDialog = ({ children, buttonText, buttonOnClick ,title, dialogDescription ,logout}: { buttonOnClick?:any ,children: React.ReactNode, buttonText?: string, title: string, dialogDescription: string ,logout:boolean}) => {
  const [open, setOpen] = useState(false); 
  
  return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{dialogDescription}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {
              logout? (
               <AlertDialogAction> <LogoutLink>Log out</LogoutLink></AlertDialogAction>
              ):(
                <AlertDialogAction onClick={()=>buttonOnClick()}>{buttonText}</AlertDialogAction>
              )
            }
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  
  export default CustomAlertDialog;