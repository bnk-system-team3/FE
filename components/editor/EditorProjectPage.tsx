'use client'

import React, { useState } from 'react'
import Editor from '@/components/editor/Editor'

export default function EditorProjectPage() {

  const [editorContent1, setEditorContent1] = useState<string>("");
  const [editorContent2, setEditorContent2] = useState<string>("");
  const [editorContent3, setEditorContent3] = useState<string>("");
  const [editorContent4, setEditorContent4] = useState<string>("");

  const handleEditorContentChange1 = (html: string) => {
    setEditorContent1(html);
  };

  const handleEditorContentChange2 = (html: string) => {
    setEditorContent2(html);
  };

  const handleEditorContentChange3 = (html: string) => {
    setEditorContent3(html);
  };

  const handleEditorContentChange4 = (html: string) => {
    setEditorContent4(html);
  };

  return (
    <div>
      <div className="css-xeauxt">
        <h2 className="css-9qa72f">📍 프로젝트 개요</h2>
        <p className="css-1n7wtqw">  - 팀원과의 첫 모임, 프로젝트 개요 등에 대해 기록해보세요 😉 </p>
      </div>
      <Editor onContentChange={handleEditorContentChange1} />

      <div className="css-xeauxt">
        <h2 className="css-9qa72f">🔥 요구사항 및 설계</h2>
        <p className="css-1n7wtqw">  - 프로젝트의 초기 단계입니다. 자유롭게 기록해보세요 💡 </p>
      </div>
      <Editor onContentChange={handleEditorContentChange2} />

      <div className="css-xeauxt">
        <h2 className="css-9qa72f">🚀 구현 단계 </h2>
        <p className="css-1n7wtqw">  - 본격적인 프로젝트 진행 단계입니다 ! 화이팅 👏 </p>
      </div>
      <Editor onContentChange={handleEditorContentChange3} />

      <div className="css-xeauxt">
        <h2 className="css-9qa72f">🎊 마무리</h2>
        <p className="css-1n7wtqw">  - 프로젝트의 전체적인 내용 등을 정리해보세요 🎁 </p>
      </div>
      <Editor onContentChange={handleEditorContentChange4} />

      <div className="sc-fnVZcZ hmqpxx">
        <button className="sc-fFSPTT eEJWPz">저장하기</button>
        <div className="sc-iemWCZ hKymwP">
          <img src="/images/bookmark.png" className="sc-dIvrsQ biCrYn" />
        </div>
      </div>
    </div>
  )
}
