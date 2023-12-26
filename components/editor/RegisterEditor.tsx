'use client'

import React, { useState } from 'react'
import { BlockNoteEditor, uploadToTmpFilesDotOrg_DEV_ONLY } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

// onContentChange prop의 타입 정의
interface EditorProps {
  onContentChange: (html: string) => void;
}

const Editor: React.FC<EditorProps> = ({ onContentChange }) => {
  // Stores the editor's contents as HTML.
  const [html, setHTML] = useState<string>("");
  
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({

    // Sets the example file upload handler.
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,

    // Listens for when the editor's contents change.
    onEditorContentChange: (editor) => {
      // Converts the editor's contents from Block objects to HTML and saves
      // them.
      const saveBlocksAsHTML = async () => {
        const html: string = await editor.blocksToHTMLLossy(editor.topLevelBlocks);
        setHTML(html);
        onContentChange(html);
      };
      saveBlocksAsHTML();
    }
  });

  return (
    <div>
      <BlockNoteView editor={editor} />
    </div>
  )
}
export default Editor;