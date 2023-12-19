'use client'

import React from 'react'
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

export default function Editor() {

  const editor: BlockNoteEditor | null = useBlockNote({});

  return (
    <div className='css-xeauxt'>
      <BlockNoteView editor={editor} />
    </div>
  )
}
