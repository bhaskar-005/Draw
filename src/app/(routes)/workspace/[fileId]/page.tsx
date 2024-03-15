"use client";
import React, { useEffect, useState } from "react";
import {ResizableHandle,ResizablePanel,ResizablePanelGroup,} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, Save, User } from "lucide-react";
import Link from "next/link";
import DocumentBlock from "@/_components/Document";
import WhiteBoard from "@/_components/WhiteBoard";
import { useParams } from "next/navigation";
import {getFile,updateWhiteboardFile,} from "@/lib/controller/projectController";
import { toast } from "sonner";
import { usePersonStore } from "@/store/store";


const page = () => {
  const perams:any = useParams();
  const [saveFile, setSaveFile] = useState(false);
  const [whiteboardfile, setWhiteboardfile] = useState<any>(null);
  const [documentfile, setDocumentfile] = useState<any>(null);
  const [DBwhiteboardfile, setDBWhiteboardfile] = useState<any>(null);
  const [DBdocumentfile, setDBDocumentfile] = useState<any>(null);
  const [Dbfiles, setDbfiles] = useState<any>(null);

  const UserInfo = usePersonStore((state)=>state.user);


  const getFileFunction = async () => {
    const getfiles: any = await getFile(perams.fileId);
    if(!getfiles){
      toast('problem while fetching file');
      return;
    }
    const parsefile = JSON.parse(getfiles);
    setDbfiles(parsefile);
   
    if (parsefile.document.length ==0 || parsefile.whiteboard.length==0) {
      return;
    }
    if(parsefile){
      const documentParse = JSON.parse(parsefile.document);
      const whiteboardParse = JSON.parse(parsefile.whiteboard);
      setDBDocumentfile(documentParse);
      setDocumentfile(documentParse)
      setDBWhiteboardfile(whiteboardParse);
      setWhiteboardfile(whiteboardParse);
    }
    
  };

  const saveFiles = async () => {
    if (!whiteboardfile && !documentfile) {
      toast("file is empty")
      return ;
    }
    if (DBdocumentfile == documentfile && DBwhiteboardfile == whiteboardfile) {
      toast('No changes were made')
      return ;
    }
    if (whiteboardfile != DBwhiteboardfile && documentfile != DBdocumentfile) {
      await updateWhiteboardFile({
        fileId: Dbfiles._id,
        whiteboard: JSON.stringify(whiteboardfile),
        document: JSON.stringify(documentfile),
      });
      toast("File saved successfully.");
      setDBDocumentfile(documentfile);
      setDBWhiteboardfile(whiteboardfile);
    }
  };

  useEffect(() => {
    getFileFunction();
  }, []);

  if (!Dbfiles) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="h-screen ">
      <div className="h-14 border-b-[0.5px] bg-white dark:bg-gray-900 border-b-gray-400 z-50 flex justify-between sm:px-8 px-2">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/projects">
            <ArrowLeftCircle className="hover:text-gray-700 size-6" />
          </Link>
          <h2 className="text-[14px] font-[600]">file name</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={() => saveFiles()}>
            <Save className="size-5 mr-3" /> Save
          </Button>
        </div>
      </div>
      <ResizablePanelGroup direction="horizontal" className="">
        <ResizablePanel>
          <DocumentBlock
            savefile={saveFile}
            defaultBlock={DBdocumentfile}
            setDocumentfile={setDocumentfile}
          />
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-gray-500 dark:bg-gray-300"/>
        <ResizablePanel>
          <WhiteBoard
            defaultBlock={DBwhiteboardfile}
            setWhiteboardfile={setWhiteboardfile}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
