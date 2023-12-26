'use client'

import React, { useState } from 'react';
import Editor from '@/components/editor/Editor';

import NcModal from "@/components/NcModal/NcModal";
import Link from 'next/link';
import SaveBtn from '@/components/editor/SaveBtn.jsx'

export default function EditorPage() {

  const [editorContent, setEditorContent] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);



  // const handleEditorChange = (content) => {
  //   setEditorContent(content);
  // };

  const handleEditorContentChange = (html: string) => {
    setEditorContent(html);
  };

  const handleSaveClick = async () => {
    // try {
    //   const response = await fetch('/api/save', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ content: editorContent }),
    //   });
    //   const data = await response.json();
    //   console.log(data); // 백엔드 응답 처리
    // } catch (error) {
    //   console.error('Error posting data:', error);
    // }

    setIsModalOpen(true)

  };

  

  return (
    <div>
      


      {/* <button onClick={console.log(editorContent)}>출력</button> */}
      <Editor onContentChange={handleEditorContentChange} />

      {/* <div className="sc-fnVZcZ hmqpxx">
      <button className="sc-fFSPTT eEJWPz" onClick={handleSaveClick}>저장하기</button>
        <div className="sc-iemWCZ hKymwP">
          <img src="/images/bookmark.png" className="sc-dIvrsQ biCrYn" />
        </div>
      </div> */}

      <SaveBtn />

      <NcModal
        isOpenProp={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        modalTitle="저장 완료"
        renderContent={() => (
          <>
            <div className='css-xeauxt'>
              test
            </div>
          </>
        )}
      />
    </div>
  )
}
