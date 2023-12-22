'use client'

import React, { useEffect } from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 

import { Pagination, Autoplay } from 'swiper/modules';




export default function BannerSwiper() {
  
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
        <a href="https://www.bnksys.co.kr/web/main.do">
          <img src="images/1.png" alt="banner" />    
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.youtube.com/@bnkfg">
          <img src="images/2.png" alt="banner" />
        </a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="images/3.png" alt="banner" />
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}
