
import React from 'react'
import CategoryTabs from '../components/tabs/CategoryTabs.jsx'
import Swiper from '@/components/swiper/BannerSwiper.jsx'

export default function Home() {



  return (
    <div>
      <div className='css-xeauxt'>
      <Swiper />
      </div>
      
      <div className='css-xeauxt'>
        <div className="css-uf1ume">
          <h2 className="css-9qa72f">🔥 이번주 인기 모임</h2>
          <div className="css-ognhcl">
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div className="slick-slider css-7y6j6i slick-initialized mr-10" dir="ltr" style={{ flex: '1', minWidth: '0' }}>
            <div className="slick-list">
              <div className="slick-track" style={{ width: '3120px', opacity: '1', transform: 'translate3d(0px, 0px, 0px)' }}>
                <div data-index="0" className="slick-slide slick-active slick-current" aria-hidden="false" style={{ outline: 'none', width: '312px' }}>
                  <div>
                    <a className="css-1ezgidp" href="/study/6573aecbc003f4001352c60b" style={{ width: '100%', display: 'inline-block' }}>
                      <div className="css-oma2kw">
                        <div className="badge_badge__ZfNyB">
                          <div className="badge_study__39LDm">🗂 프로젝트</div>
                        </div>
                        <div className="css-4iipbq">🚨 마감 8일전</div>
                      </div>
                      <div className="css-3wobgm">마감일 | 2023.12.23</div>
                      <h1 className="css-a6vgi6">리그오브레전드 관련 사이드 프로젝트 팀원모집합니다!</h1>
                      <div className="css-1x6kfnp">👀 조회수 650회</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slick-slider css-7y6j6i slick-initialized" dir="ltr" style={{ flex: '1', minWidth: '0' }}>
            <div className="slick-list">
              <div className="slick-track" style={{ width: '3120px', opacity: '1', transform: 'translate3d(0px, 0px, 0px)' }}>
                <div data-index="0" className="slick-slide slick-active slick-current" aria-hidden="false" style={{ outline: 'none', width: '312px' }}>
                  <div>
                    <a className="css-1ezgidp" href="/study/6573aecbc003f4001352c60b" style={{ width: '100%', display: 'inline-block' }}>
                      <div className="css-oma2kw">
                        <div className="badge_badge__ZfNyB">
                          <div className="badge_study__39LDm">🗂 프로젝트</div>
                        </div>
                        <div className="css-4iipbq">🚨 마감 8일전</div>
                      </div>
                      <div className="css-3wobgm">마감일 | 2023.12.23</div>
                      <h1 className="css-a6vgi6">리그오브레전드 관련 사이드 프로젝트 팀원모집합니다!</h1>
                      <div className="css-1x6kfnp">👀 조회수 650회</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='css-xeauxt'>
        <div>
          <h2 className="css-9qa72f">😀 모임</h2>
          <CategoryTabs />
        </div>
      </div>



    </div>
  )
}
