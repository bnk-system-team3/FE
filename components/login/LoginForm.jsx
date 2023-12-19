'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import styles from './LoginArea.module.css'

export default function LoginForm() {

  const [pwType, setPwType] = useState(true);

  return (
    <div className='css-xeauxt'>
      <div>
        <div>
          {/* <PublicModal isOpen={isOpen} onOpenChange={onOpenChange} content={modalContent} /> */}
        </div>
        <p className='mt-4 font-semibold'>아이디</p>
        <div className={styles.input_box}>
          <input id="loginId"
            name="loginId"
            type="text"
            placeholder="example@example.com"
            // onChange={handleOnChange}
            // defaultValue={loginData.loginId}
            title="로그인을 위해 아이디를 입력해주세요." />
        </div>

        <p className='flex justify-between font-semibold'>
          비밀번호
          <span>
            <Link href="/findIdPw" className='text-[13px] text-blue-600 underline'>아이디·비밀번호 찾기</Link>
          </span>
        </p>
        <div className={styles.input_box}>
          <input id="password"
            name='password'
            type={pwType ? 'password' : 'text'}
            // onChange={handleOnChange}
            title="로그인을 위해 비밀번호를 입력해주세요." />
          {/* <button type="button" onClick={handlePwType}> */}
          <button type="button" >
            <Link href="/moa-login" id="pw00_btn" className={styles.ico_eye_slash}>비밀번호 보기</Link>
          </button>
        </div>
        <div className='grid place-items-center mt-8'>
          {/* <button onClick={handleLogin} className='h-[44px] w-[300px] bg-[#4338ca] rounded-full grid place-items-center text-white font-semibold'>로그인</button> */}
          <button className='h-[44px] w-[300px] bg-[#ffcd00] rounded-full grid place-items-center text-white font-semibold'>로그인</button>
        </div>
        <ul className='grid place-items-center'>
          {/*         <li>
          <Link href="/login/findId" className={styles.btn}>아이디 찾기</Link>
        </li>
        <li>
          <Link href="/login/findPw" className={styles.btn}>비밀번호 찾기</Link>
        </li> */}

          <li className='mt-4'>
            <span>아직 회원이 아니신가요?</span>
            <a href="/join" className='text-blue-400 font-semibold underline'>회원가입</a>
          </li>
        </ul>


      </div>
    </div>
  )
}
