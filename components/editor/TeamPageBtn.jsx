'use client'

import React, { useState } from 'react'
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import NcModal from "@/components/NcModal/NcModal";
import Link from 'next/link';


export default function TeamPageBtn() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleButtonClick = async () => {
    // 백엔드 요청
    const response = await fetch('/api/some-endpoint'); // 백엔드 엔드포인트
    const data = await response.json();

    if (data === null) {
      // 데이터가 null일 경우 모달 표시
      setIsModalOpen(true);
    } else {
      // 데이터가 존재할 경우 예시 페이지로 이동
      router.push('/example-page'); // 이동하고자 하는 페이지 경로
    }
  };

  return (
    <div>
      <Button color="default" variant="ghost" onClick={() => { setIsModalOpen(true) }}>
        팀 페이지
      </Button>

      <NcModal
        isOpenProp={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        modalTitle="템플릿을 사용하시겠습니까?"
        renderContent={() => (
          <>
            <div className="loginModal_modalContent__zBWTK">
              <section className="socialLogin_loginWrapper__3Niwt">
              <div>
                  <div className="kakaoButton_buttonWrapper__2BAZP">
                    <Link className="googleButton_button__3G4DT" href="/editor">
                    <img src="/images/category/seminar.png" alt="logo" className="w-100 h-100" />
                    </Link>
                    <p className="kakaoButton_loginDescription__P1TjV">빈 페이지</p>
                  </div>
                </div>
                <div>
                  <div className="googleButton_buttonWrapper__1kPf3">
                    <Link className="googleButton_button__3G4DT" href="/editor/project">
                      <img src="/images/category/project.png" alt="logo" className="w-100 h-100" />
                    </Link>
                    <p className="googleButton_loginDescription__1MrCF">프로젝트</p>
                  </div>
                </div>
                <div>
                  <div className="githubButton_buttonWrapper__5pwEe">
                    <Link className="googleButton_button__3G4DT" href="/editor/hobby">
                      <img src="/images/category/gallery.png" alt="logo" className="w-100 h-100" />
                    </Link>
                    <p className="githubButton_loginDescription__3cZtC">갤러리</p>
                  </div>
                </div>
                
                
              </section>
            </div>
          </>
        )}
      />
    </div>
  )
}
