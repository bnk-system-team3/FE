import React from 'react'
import Editor from '@/components/editor/Editor'

export default function page() {
  return (
    <div>
      <div className="studyContent_title__3680o">For Fun에서의 두번째 프로덕트 개발</div>
      <div className="studyContent_userAndDate__1iYDv">
        <div className="studyContent_user__1XYmH">
          <div className="studyContent_userName__1GBr8">모임장 : 땅콩이</div>
        </div>
        <div className="studyContent_seperator__3CadK">
        </div>
        <div className="studyContent_registeredDate__3lybC">진행 기간 : 2023.12.20 ~ 2023.12.29</div>
      </div>

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
