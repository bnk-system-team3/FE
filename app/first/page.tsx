'usr client'

import React from 'react'
import CategoryTabs from '@/components/tabs/CategoryTabs.jsx'
import Swiper from '@/components/swiper/BannerSwiper.jsx'


async function getData() {
  const res = await fetch('http://192.168.0.142:3200/board/searchByViewCnt')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {

  const data = await getData()

  console.log(data[0])

  const calculateDaysLeft = (dueDateStr: any) => {
    const dueDate = new Date(dueDateStr);
    const currentDate = new Date();
    const timeDiff = dueDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  };

  const daysLeft = calculateDaysLeft(data[0].dueDate.slice(0, 10));

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
                    <a className="css-1ezgidp" href="/meeting/detail/0" style={{ width: '100%', display: 'inline-block' }}>
                      <div className="css-oma2kw">
                        <div className="badge_badge__ZfNyB">
                          <div className="badge_study__39LDm">🗂 {data[0].category}</div>
                        </div>
                        <div className="css-4iipbq">🚨 마감 {daysLeft}일전</div>
                      </div>
                      <div className="css-3wobgm">마감일 | {data[0].dueDate.slice(0, 10)}</div>
                      <h1 className="css-a6vgi6">{data[0].title}</h1>
                      <div className="css-1x6kfnp">👀 조회수 {data[0].viewCnt}회</div>
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
                    <a className="css-1ezgidp" href="/meeting/detail/0" style={{ width: '100%', display: 'inline-block' }}>
                      <div className="css-oma2kw">
                        <div className="badge_badge__ZfNyB">
                          <div className="badge_study__39LDm">🗂 프로젝트</div>
                        </div>
                        <div className="css-4iipbq">🚨 마감 8일전</div>
                      </div>
                      <div className="css-3wobgm">마감일 | 2023.12.23</div>
                      <h1 className="css-a6vgi6">[프론트] - 새로운 트렌디한 마켓플레이스 제작 팀원 모집</h1>
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
