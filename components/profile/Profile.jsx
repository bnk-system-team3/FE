'use client'

import React from 'react'

export default function Profile() {
  return (
    <div>
      <div className="css-gq3aoy">
        <div className="style_imageContainer__3wrgm">
          <label className="style_profileContainer__1ej4M">
            <img className="style_userImg__1ujTt" src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG" alt="user avatar" />
            <img className="style_profileEditBtn__3NSbU" src="/images/profile_edit.png" alt="profile edit" />
            <input id="imageUpload" type="file" accept="image/*" />
          </label>
        </div>
        <div className="css-nkt5tk">awdfaf님 환영해요.</div>
        <form className="css-1cw2qsn">
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">
              닉네임
              <span className="css-1xtz61h">*</span>
            </div>
            <input placeholder="닉네임을 입력해주세요" name="nickName" className="css-1ltmxea" />
          </div>
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">
              직무
              <span className="css-1xtz61h">*</span>
            </div>
            <div className=" css-2b097c-container">
              <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
              <div className=" css-1r0k60i-control">
                <div className=" css-1hwfws3">
                  <div className=" css-1uccc91-singleValue">
                    프론트엔드
                  </div>
                  <div className="css-1g6gooi">
                    <div className="" style={{ display: 'inline-block' }}>
                      <input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-8-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" value=""
                        style={{
                          boxSizing: 'content-box',
                          width: '2px',
                          background: '0px center',
                          border: '0px',
                          fontSize: 'inherit',
                          opacity: 1,
                          outline: '0px',
                          padding: '0px',
                          color: 'inherit',
                        }} />
                      <div style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        visibility: 'hidden',
                        height: '0px',
                        overflow: 'scroll',
                        whiteSpace: 'pre',
                        fontSize: '16px',
                        fontFamily: '"Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: 'normal',
                        textTransform: 'none',
                      }}></div>
                    </div>
                  </div>
                </div>
                <div className=" css-1wy0on6">
                  <span className=" css-43ykx9-indicatorSeparator">
                  </span>
                  <div className=" css-tlfecz-indicatorContainer" aria-hidden="true">
                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <input name="position" type="hidden" value="FE" />
            </div>
          </div>
          <div className="css-17yaykr">
            <div className="css-uf1ume">
              <div className="css-1n7wtqw">소속</div>
              <div className="css-10oczdc" id="headlessui-radiogroup-7" role="radiogroup" data-headlessui-state="">
                <div className="css-5i79t4" id="headlessui-radiogroup-option-8" role="radio" aria-checked="false" tabindex="-1" data-headlessui-state="">
                  <span className="css-owsb5s"></span>
                  <span className="css-1gymfq1">공개</span>
                </div>
                <div className="css-5i79t4" id="headlessui-radiogroup-option-9" role="radio" aria-checked="true" tabindex="0" data-headlessui-state="checked">
                  <img src="/images/selected.png" className="css-1yi8y74" />
                  <span className="css-1gymfq1">비공개</span>
                </div>
              </div>
            </div>
            <input placeholder="소속을 입력해주세요. ex) 올라 회사, 올라 대학교... " name="organizationName" className="css-1ltmxea" />
          </div>
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">경력
              <span className="css-1xtz61h">*</span>
            </div>
            <div className=" css-2b097c-container">
              <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
              <div className=" css-1r0k60i-control">
                <div className=" css-1hwfws3">
                  <div className=" css-1uccc91-singleValue">1년</div>
                  <div className="css-1g6gooi">
                    <div className="" style={{ display: 'inline-block' }}>
                      <input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-9-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" value="" 
                      style={{
                        boxSizing: 'content-box',
                        width: '2px',
                        background: '0px center',
                        border: '0px',
                        fontSize: 'inherit',
                        opacity: 1,
                        outline: '0px',
                        padding: '0px',
                        color: 'inherit',
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        visibility: 'hidden',
                        height: '0px',
                        overflow: 'scroll',
                        whiteSpace: 'pre',
                        fontSize: '16px',
                        fontFamily: '"Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: 'normal',
                        textTransform: 'none',
                      }}></div>
                    </div>
                  </div>
                </div>
                <div className=" css-1wy0on6">
                  <span className=" css-43ykx9-indicatorSeparator"></span>
                  <div className=" css-tlfecz-indicatorContainer" aria-hidden="true">
                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <input name="workExperience" type="hidden" value="1" />
            </div>
          </div>
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">자기소개</div>
            <textarea placeholder="안녕하세요. 1년차 프론트엔드 개발자 awdfaf입니다." name="introduce" className="css-1ogq275">
            </textarea>
          </div>
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">관심스택
              <span className="css-1xtz61h">*</span>
            </div>
            <div className=" css-2b097c-container">
              <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
              <div className=" css-1r0k60i-control">
                <div className=" css-1hwfws3">
                  <div className="css-1rhbuit-multiValue">
                    <div className="css-12jo7m5">JavaScript</div>
                    <div className="css-xb97g8">
                      <svg height="14" width="14" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="css-1g6gooi">
                    <div className="" style={{ display: 'inline-block' }}>
                      <input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-10-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" value="" 
                      style={{
                        boxSizing: 'content-box',
                        width: '2px',
                        background: '0px center',
                        border: '0px',
                        fontSize: 'inherit',
                        opacity: 1,
                        outline: '0px',
                        padding: '0px',
                        color: 'inherit',
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        visibility: 'hidden',
                        height: '0px',
                        overflow: 'scroll',
                        whiteSpace: 'pre',
                        fontSize: '16px',
                        fontFamily: '"Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: 'normal',
                        textTransform: 'none',
                      }}></div>
                    </div>
                  </div>
                </div>
                <div className=" css-1wy0on6">
                  <div className=" css-tlfecz-indicatorContainer" aria-hidden="true">
                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                    </svg>
                  </div>
                  <span className=" css-43ykx9-indicatorSeparator"></span>
                  <div className=" css-tlfecz-indicatorContainer" aria-hidden="true">
                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <input name="likeLanguages" type="hidden" value="javascript" />
              </div>
            </div>
          </div>
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">링크</div>
            <ul className="css-curg5w"></ul>
            <div className="css-1ak5h4d">+ 추가</div>
          </div>
          <div className="css-ndq9l2">
            <button type="submit" className="css-u7euz2">프로필 저장</button>
            <div className="css-12jw1xy">회원 탈퇴</div>
          </div>
        </form>
      </div>
    </div>
  )
}
