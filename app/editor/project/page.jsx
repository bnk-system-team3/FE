import React from 'react'
import Editor from '@/components/editor/Editor'

export default function page() {
  return (
    <div>
      <div class="css-xeauxt">
        <h2 className="css-9qa72f">📍 프로젝트 개요</h2>
        <p className="css-1n7wtqw">  - 팀원과의 첫 모임, 프로젝트 개요 등에 대해 기록해보세요 😉 </p>
      </div>
      <Editor />

      <div class="css-xeauxt">
        <h2 className="css-9qa72f">🔥 요구사항 및 설계</h2>
        <p className="css-1n7wtqw">  - 프로젝트의 초기 단계입니다. 자유롭게 기록해보세요 💡 </p>
      </div>
      <Editor />

      <div class="css-xeauxt">
        <h2 className="css-9qa72f">🚀 구현 단계 </h2>
        <p className="css-1n7wtqw">  - 본격적인 프로젝트 진행 단계입니다 ! 화이팅 👏 </p>
      </div>
      <Editor />

      <div class="css-xeauxt">
        <h2 className="css-9qa72f">🎊 마무리</h2>
        <p className="css-1n7wtqw">  - 프로젝트의 전체적인 내용 등을 정리해보세요 🎁 </p>
      </div>
      <Editor />
    </div>
  )
}
