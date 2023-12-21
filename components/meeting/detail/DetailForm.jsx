'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://moa-backend.duckdns.org/api/v1/meeting/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  return res.json()
}

export default async function DetailForm(props) {

  // console.log(props.id)

  // const data = await getData(props.id)

  let router = useRouter()

  return (
    <div>
      <div className="studyContent_wrapper__VVyNH">
        <section className="studyContent_postHeader__2Qu_y">
          <button onClick={()=>{ router.back() }}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" color="808080" cursor="pointer" height="30" width="30" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(128, 128, 128)' }}>
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
            </path>
          </svg>
          </button>
          <div className="studyContent_title__3680o">For Fun에서 두번째 프로덕트를 만드실 개발자분을 모집해요</div>
          <div className="studyContent_userAndDate__1iYDv">
            <div className="studyContent_user__1XYmH">
              <img className="studyContent_userImg__3gyI-" src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG" alt="userImg" />
              <div className="studyContent_userName__1GBr8">땅콩이</div>
            </div>
            <div className="studyContent_seperator__3CadK">
            </div>
            <div className="studyContent_registeredDate__3lybC">2023.12.18</div>
          </div>
          <div className="recommendPost_totalWrapper__MvKNa">
            <div className="recommendPost_recommendWrapper__v-DsD">
              <div className="recommendPost_userInfoWrapper__2T6u8">
                <div className="recommendPost_bar__3GKlv">
                </div>
                <div className="recommendPost_userInfo__1Ozvo">
                  <span className="recommendPost_userName__2gZg6">awdfaf</span>
                  님이
                  <br />
                  좋아하실 글을 모아봤어요!
                </div>
              </div>
              <ul className="recommendPost_listWrapper__1Ix8x">
                <li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">1.</div>
                  <div className="recommendPost_title__38iq9">
                    🔆✨🔆 안녕하세요, 대한민국에 대형 IT 업계와 나란히 성장할 수 있는 유니콘기업을 만들기 위한 열정 가득한 팀원을 공개 모집합니다!!!🔆✨🔆
                  </div>
                </li>
                <li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">2.</div>
                  <div className="recommendPost_title__38iq9">[모집] 안드로이드 개발자 멤버 기다리고 있어요~! </div>
                </li>
                <li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">3.</div>
                  <div className="recommendPost_title__38iq9">골든래빗 코딩스터디 묘공단 12월 단장 모집이 열렸습니다.</div>
                </li>
                <li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">4.</div>
                  <div className="recommendPost_title__38iq9">플러터 flutter로 지도 연동 모임 앱 만드는 중입니다.</div>
                </li>
                <li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">5.</div>
                  <div className="recommendPost_title__38iq9">안드로이드, IOS 개발자 모집중 - List 형태의 데이터 관리 공유 서비스</div>
                </li>
                <li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">6.</div>
                  <div className="recommendPost_title__38iq9">Project 'I'에서 앱개발자분을 모집합니다.</div>
                </li>
                <li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">7.</div>
                  <div className="recommendPost_title__38iq9">[Flutter/충원] 수제케이크 가제 정보 제공 앱(1월 출시)</div>
                </li>
                <li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">8.</div>
                  <div className="recommendPost_title__38iq9">사이드 프로젝트 개발자&amp;디자이너 연합 동아리 DND 10기 모집</div>
                </li><li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">9.</div>
                  <div className="recommendPost_title__38iq9">[ 팀원모집 ] 강아지 배변 인식 서비스 '퍼피푸' 프론트엔드 개발자님을 모십니다.</div>
                </li>
                <li className="recommendPost_postList__S6Av-">
                  <div className="recommendPost_index__2o2jf">10.</div>
                  <div className="recommendPost_title__38iq9">크로스플랫폼 개발자분 구해요~</div>
                </li>
              </ul>
            </div>
          </div>
          <section className="studyInfo_allWrapper__2ab9e">
            <ul className="studyInfo_studyGrid__38Lfj">
              <li className="studyInfo_contentWrapper__KkSUP">
                <span className="studyInfo_title__3jXRE">모집 구분</span>
                <span className="studyInfo_content__eqtqC">프로젝트</span>
              </li>
              <li className="studyInfo_contentWrapper__KkSUP">
                <span className="studyInfo_title__3jXRE">진행 방식</span>
                <span className="studyInfo_content__eqtqC">온라인</span>
              </li>
              <li className="studyInfo_contentWrapper__KkSUP">
                <span className="studyInfo_title__3jXRE">모집 인원</span>
                <span className="studyInfo_content__eqtqC">2명</span>
              </li>
              <li className="studyInfo_contentWrapper__KkSUP">
                <span className="studyInfo_title__3jXRE">시작 예정</span>
                <span className="studyInfo_content__eqtqC">2024.01.07</span>
              </li>
              <li className="studyInfo_contentWrapper__KkSUP">
                <span className="studyInfo_title__3jXRE">연락 방법</span>
                <div className="contactPoint_contactWrapper__2T_GC">
                  <a className="contactPoint_link__2MqRR" href="https://open.kakao.com/o/sA2VPRie" target="_blank" rel="noreferrer">
                    <span>오픈톡</span>
                    <img className="contactPoint_linkImg__2_927" src="/images/link.svg" alt="링크" />
                  </a>
                </div>
              </li>
              <li className="studyInfo_contentWrapper__KkSUP">
                <span className="studyInfo_title__3jXRE">예상 기간</span>
                <span className="studyInfo_content__eqtqC">3개월</span>
              </li>
            </ul>
            <div className="studyInfo_remains__1QGLr">
              <li className="studyInfo_contentWrapper__KkSUP studyInfo_oneLineItem__3-9Q7">
                <span className="studyInfo_title__3jXRE">모집 분야</span>
                <ul className="studyInfo_languageList__1usTa">
                  <li className="studyInfo_positions__3JIxy">프론트엔드</li>
                </ul>
              </li>
              <li className="studyInfo_contentWrapper__KkSUP studyInfo_oneLineItem__3-9Q7">
                <span className="studyInfo_title__3jXRE">사용 언어</span>
                <ul className="studyInfo_languageList__1usTa">
                  <li className="studyInfo_positions__3JIxy">프론트엔드</li>
                  <li className="studyInfo_positions__3JIxy">프론트엔드</li>
                  <li className="studyInfo_positions__3JIxy">프론트엔드</li>
                </ul>
              </li>
            </div>
          </section>
        </section>
        <div className="studyContent_postContentWrapper__187Zh">
          <h2 className="studyContent_postInfo__3zpYu">모임 소개</h2>
          {/* <div className="studyContent_postContent__2c-FO">
            <p>
              <strong>팀소개</strong>
            </p>
          </div> */}
        </div>
        <section className="sc-hHEiqL ccTnQh">
          <div className="sc-kfYoZR lpaEYv">
            <img src="/images/eye.png" alt="views" className="sc-bCwfaz hzzSzX" />
            <span className="sc-iwajpm kydRHc">66</span>
          </div>
          <div className="sc-dlMDgC kpPvTx">
            <img src="/images/bookmark.svg" alt="likes" className="sc-fKgJPI cxbltl" />
            <span className="sc-iwajpm kydRHc">2</span>
          </div>
        </section>
        <div style={{ paddingBottom: '80px' }}>
          <div className="commentInput_commentInput__39H41">
            <div className="commentInput_comment__Retbz">
              댓글
              <span className="commentInput_commentCount__2dHvH">0</span>
            </div>
            <div className="commentInput_inputContainer__2W4WS">
              <img className="commentInput_profile__26AuB" src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG" alt="profile" />
              <textarea className="commentInput_commentText__2er8t" placeholder="댓글을 입력하세요."></textarea>
            </div>
            <div className="commentInput_buttonWrapper__2f_l9">
              <button className="commentInput_buttonComplete__24z4R" name="register">댓글 등록</button>
            </div>
          </div>
          <ul className="commentList_CommentList__30HUh">
          </ul>
        </div>
      </div>



      <div className="sc-fnVZcZ hmqpxx">
        <button className="sc-fFSPTT eEJWPz">바로지원</button>
        <button className="sc-bkbkJK eraKfR">공유하기</button>
        <div className="sc-iemWCZ hKymwP">
          <img src="/images/bookmark.svg" className="sc-dIvrsQ biCrYn" />
        </div>
      </div>
    </div>
  )
}
