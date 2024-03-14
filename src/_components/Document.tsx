import React from 'react';
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const DocumentBlock = ({  setDocumentfile , defaultBlock }: any) => {
   
  const editor = useCreateBlockNote({
    initialContent: defaultBlock ? defaultBlock : [
      {
        type: "paragraph",
        content: "Welcome to DRAW !",
      }
    ]
  });

  const onChange = async () => {
    const blocks = editor.document;
    setDocumentfile(blocks);

  };
  return (
        <BlockNoteView editor={editor} onChange={onChange}  data-theming-css-variables-demo/>
  );
}

export default DocumentBlock;

