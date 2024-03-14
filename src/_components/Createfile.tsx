'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFile } from "@/lib/controller/projectController";
import { usePersonStore } from "@/store/store";
import { toast } from "sonner";
import { useRouter } from 'next/navigation'


const Createfile = ({userInfo}:{userInfo:any}) => {

  const [filename, setfilename] = useState<string>("");
  const [open , setOpen] = useState(false);
  const updatedUser = usePersonStore((state:any)=> state.updateUser)
  const updatedProject= usePersonStore((state:any)=> state.updateProject)
  const router = useRouter();


  const createProject = async () => {
    try {
      if (userInfo.plan == 'free' && userInfo.project.length >= 5 ) {
        toast("Maximum File Creation Limit Reached", {
          description: "upgrade you plan to premium",
          action: {
            label: "Upgrade",
            onClick: () => router.push('/dashboard/plans'),
          },
        });
      }
      const create:any = await createFile({ userId: userInfo?._id, fileName: filename });
      const ParseUser = JSON.parse(create);
      console.log(ParseUser);
      if (ParseUser) {
      updatedUser(ParseUser);
      updatedProject(ParseUser.project)
      toast('Project created successfully')
      }
    } catch (error) {
      console.log(error);
      toast('Problem while creating project')
    }
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger asChild>
          <Button className="gap-2">
            <Plus className=" h-4 w-4" />
            <div className="sm:block hidden">New Project</div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>
              Project details here. Click 'Create' when you're ready to proceed.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Project Name
              </Label>
              <Input
                id="name"
                placeholder="project "
                onChange={(e) => setfilename(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => {createProject().then(() => setOpen(false))}}>
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Createfile;
