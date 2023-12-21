'use client'

import React, { useRef, useState } from 'react'
import "@/components/ImageBox/img.css"
import ImageBox from "@/components/ImageBox/ImageBox";
import Editor from '@/components/editor/Editor'

export default function page() {
  const inpRef = useRef<HTMLInputElement>(null);
  const [imageList, setImageList] = useState<string[]>([]);

  return (
    <div>
      <div className="studyContent_title__3680o">2023-12-24 축구 모임</div>
      <div className="studyContent_userAndDate__1iYDv">
        <div className="studyContent_user__1XYmH">
          <div className="studyContent_userName__1GBr8">모임장 : 싸커킹</div>
        </div>
        <div className="studyContent_seperator__3CadK">
        </div>
        <div className="studyContent_registeredDate__3lybC">진행 기간 : 2023.12.24 ~ 2023.12.24</div>
      </div>

      <div className="css-xeauxt">
        <h2 className="css-9qa72f">📍 활동 사진</h2>
        <p className="css-1n7wtqw">  - 팀원과의 활동을 기록해보세요 😉 </p>
      </div>
      <div className={"gallery-box " + (imageList.length > 0 && "row")}>
        {imageList.length === 0 && (
          <div className="text-center">
            이미지가 없습니다. <br /> 이미지를 추가해주세요.
          </div>
        )}

        {imageList.map((el, idx) => (
          <ImageBox key={el + idx} src={el} />
        ))}
        <div
          className="plus-box"
          onClick={() => {
            inpRef.current?.click();
          }}
        >
          +
          <input
            type="file"
            ref={inpRef}

            onChange={(event) => {
              if (event.currentTarget.files?.[0]) {
                console.log(event.currentTarget.files[0]);
                const file = event.currentTarget.files[0];

                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = (event) => {
                  setImageList((prev) => [
                    ...prev,
                    event.target?.result as string,
                  ]);
                };
              }
            }}
          />
        </div>
      </div>
      <Editor />
    </div>
  )
}
