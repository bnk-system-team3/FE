'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Accordion, AccordionItem, Card, CardBody, Button } from "@nextui-org/react";
import TeamPageBtn from '@/components/editor/TeamPageBtn.jsx';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Modal from 'react-modal';

export default function MeetingTable(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNameClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  // console.log(props.id);

  const [projects, setProjects] = useState([]);

  let router = useRouter()

  useEffect(() => {
    // 백엔드에서 프로젝트 데이터 가져오기
    const fetchData = async () => {
      try {
        const response = await fetch('/api/projects'); // 백엔드 API 엔드포인트
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    // fetchData();
  }, []);

  return (
    <div>
      <ul>
        <div className="studyItem_studyItem__1Iipn studyItem_open__1PGn-">
          <div>
            <li>
              <div className="studyItem_badgeWrapper__3AW7k">
                <div className="badge_badge__ZfNyB">
                  <div className="badge_study__39LDm">🗂 프로젝트</div>
                </div>
                <div className="badge_badge__ZfNyB">
                  <div className="badge_new__DZ5tY">🍞 따끈따끈 새 글</div>
                </div>
              </div>
              <div className="studyItem_schedule__3oAnA">
                <p className="studyItem_scheduleTitle__1KN_9">마감일 |</p>
                <p>2023.12.31</p>
              </div>
              <a href="/meeting/detail/0">
                <h1 className="studyItem_title__2B_2o">'예비 부부를 위한 결혼 문답 앱, 메리' UI/UX 디자이너 모집</h1>
              </a>
              <ul className="studyItem_positionList__1jzi_">
                <li className="studyItem_position__2sRRD">디자이너</li>
              </ul>
              <ul className="studyItem_content__1mJ9M">
                {props.id === 9 && (
                  <li>
                    <div className="commentInput_buttonWrapper__2f_l9">
                      {/* <button className="commentInput_buttonComplete__24z4R" name="register">팀 페이지</button> */}
                      <TeamPageBtn />
                    </div>
                  </li>
                )}
              </ul>
              <div className="studyItem_border__2zAjs">
              </div>
              <section className="studyItem_info__OFIQU">
                <div className="studyItem_userInfo__1KkGa">
                  <div className="avatar_user__1Pgut">
                    <img className="avatar_userImg__hogPI" width="30px" height="30px" src="/images/bnk.png" alt="avatar" />
                  </div>
                  <div>abloom</div>
                </div>
                <div className="studyItem_viewsAndComment__1Bxpj">
                  <div className="studyItem_infoItem__3vxSf">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#999999" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(153, 153, 153)" }}>
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                      </path>
                    </svg>
                    <p>4</p>
                  </div>
                </div>
              </section>
              <img className="studyItem_bookmark__2YtKX" src="/images/bookmark.png" alt="bookmark" />
            </li>
          </div>
          {props.id === 9 && (
            <Accordion isCompact>
              <AccordionItem key="1" aria-label="Accordion 1" title="참가 신청 인원">
                <Card>
                  <CardBody>

                    <Table aria-label="Example static collection table">
                      <TableHeader>
                        <TableColumn style={{ textAlign: 'center' }}>닉네임</TableColumn>
                        <TableColumn style={{ textAlign: 'center' }}>관심분야</TableColumn>
                        <TableColumn style={{ textAlign: 'center' }}>승인/반려</TableColumn>

                      </TableHeader>
                      <TableBody style={{ textAlign: 'center' }}>
                        <TableRow>
                          <TableCell style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleNameClick}>
                          minsemanse
                          </TableCell>
                          <TableCell >프론트엔드</TableCell>
                          <TableCell>
                            <Button style={{ backgroundColor: '#fff', border: 'solid 1px #cb2b11', borderColor: '#cb2b11', marginRight: '10px', fontWeight: 'bold' }}>승인</Button>
                            <Button style={{ backgroundColor: '#cb2b11', color: '#fff', fontWeight: 'bold' }}>반려</Button>
                          </TableCell>
                        </TableRow >
                        <TableRow key="2">
                          <TableCell style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleNameClick}>geonwoo</TableCell>
                          <TableCell >프론트엔드</TableCell>
                          <TableCell>
                            <Button style={{ backgroundColor: '#fff', border: 'solid 1px #cb2b11', borderColor: '#cb2b11', marginRight: '10px', fontWeight: 'bold' }}>승인</Button>
                            <Button style={{ backgroundColor: '#cb2b11', color: '#fff', fontWeight: 'bold' }}>반려</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow key="3">
                          <TableCell style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleNameClick}>JEONG</TableCell>
                          <TableCell >백엔드</TableCell>
                          <TableCell>
                            <Button style={{ backgroundColor: '#fff', border: 'solid 1px #cb2b11', borderColor: '#cb2b11', marginRight: '10px', fontWeight: 'bold' }}>승인</Button>
                            <Button style={{ backgroundColor: '#cb2b11', color: '#fff', fontWeight: 'bold' }}>반려</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow key="4">
                          <TableCell style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleNameClick}>Young-Seok</TableCell>
                          <TableCell >백엔드</TableCell>
                          <TableCell>
                            <Button style={{ backgroundColor: '#fff', border: 'solid 1px #cb2b11', borderColor: '#cb2b11', marginRight: '10px', fontWeight: 'bold' }}>승인</Button>
                            <Button style={{ backgroundColor: '#cb2b11', color: '#fff', fontWeight: 'bold' }}>반려</Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardBody>
                </Card>

              </AccordionItem>
            </Accordion>
          )}
          <div className="studyItem_seperator__1rRiE"></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="studyItem_studyItem__1Iipn studyItem_open__1PGn-">
          <div>
            <li>
              <div className="studyItem_badgeWrapper__3AW7k">
                <div className="badge_badge__ZfNyB">
                  <div className="badge_study__39LDm">🗂 프로젝트</div>
                </div>
                <div className="badge_badge__ZfNyB">
                  <div className="badge_new__DZ5tY">🍞 따끈따끈 새 글</div>
                </div>
              </div>
              <div className="studyItem_schedule__3oAnA">
                <p className="studyItem_scheduleTitle__1KN_9">마감일 |</p>
                <p>2024.01.08</p>
              </div>
              <a href="/meeting/detail/0">
                <h1 className="studyItem_title__2B_2o">[RN개발자] 💪 2024, 사이드프로젝트로 더 성장할 팀원 구합니다!</h1>
              </a>
              <ul className="studyItem_positionList__1jzi_">
                <li className="studyItem_position__2sRRD">프론트엔드</li>
                <li className="studyItem_position__2sRRD">안드로이드</li>
              </ul>
              <ul className="studyItem_content__1mJ9M">
                {props.id === 9 && (
                  <li>
                    <div className="commentInput_buttonWrapper__2f_l9">
                      {/* <button className="commentInput_buttonComplete__24z4R" name="register">팀 페이지</button> */}
                      <TeamPageBtn />
                    </div>
                  </li>
                )}
              </ul>
              <div className="studyItem_border__2zAjs">
              </div>
              <section className="studyItem_info__OFIQU">
                <div className="studyItem_userInfo__1KkGa">
                  <div className="avatar_user__1Pgut">
                    <img className="avatar_userImg__hogPI" width="30px" height="30px" src="/images/bnk.png" alt="avatar" />
                  </div>
                  <div>geonwoo</div>
                </div>
                <div className="studyItem_viewsAndComment__1Bxpj">
                  <div className="studyItem_infoItem__3vxSf">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#999999" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(153, 153, 153)" }}>
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                      </path>
                    </svg>
                    <p>2</p>
                  </div>
                </div>
              </section>
              <img className="studyItem_bookmark__2YtKX" src="/images/bookmark.png" alt="bookmark" />
            </li>
          </div>
          {props.id === 9 && (
            <Accordion isCompact>
              <AccordionItem key="1" aria-label="Accordion 1" title="참가 신청 인원">
                <Card>
                  <CardBody>
                    {defaultContent}
                  </CardBody>
                </Card>

              </AccordionItem>
            </Accordion>
          )}
          <div className="studyItem_seperator__1rRiE"></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="studyItem_studyItem__1Iipn studyItem_open__1PGn-">
          <div>
            <li>
              <div className="studyItem_badgeWrapper__3AW7k">
                <div className="badge_badge__ZfNyB">
                  <div className="badge_study__39LDm">🗂 봉사</div>
                </div>
                <div className="badge_badge__ZfNyB">
                  <div className="badge_new__DZ5tY">🍞 따끈따끈 새 글</div>
                </div>
              </div>
              <div className="studyItem_schedule__3oAnA">
                <p className="studyItem_scheduleTitle__1KN_9">마감일 |</p>
                <p>2023.12.31</p>
              </div>
              <a href="/meeting/detail/0">
                <h1 className="studyItem_title__2B_2o">가플지우 연안 정화활동 '이달의 바다' 부산</h1>
              </a>
              <ul className="studyItem_positionList__1jzi_">
                <li className="studyItem_position__2sRRD">봉사자</li>
              </ul>
              <ul className="studyItem_content__1mJ9M">
                {props.id === 9 && (
                  <li>
                    <div className="commentInput_buttonWrapper__2f_l9">
                      {/* <button className="commentInput_buttonComplete__24z4R" name="register">팀 페이지</button> */}
                      <TeamPageBtn />
                    </div>
                  </li>
                )}
              </ul>
              <div className="studyItem_border__2zAjs">
              </div>
              <section className="studyItem_info__OFIQU">
                <div className="studyItem_userInfo__1KkGa">
                  <div className="avatar_user__1Pgut">
                    <img className="avatar_userImg__hogPI" width="30px" height="30px" src="/images/bnk.png" alt="avatar" />
                  </div>
                  <div>JEONG</div>
                </div>
                <div className="studyItem_viewsAndComment__1Bxpj">
                  <div className="studyItem_infoItem__3vxSf">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#999999" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(153, 153, 153)" }}>
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                      </path>
                    </svg>
                    <p>29</p>
                  </div>
                </div>
              </section>
              <img className="studyItem_bookmark__2YtKX" src="/images/bookmark.png" alt="bookmark" />
            </li>
          </div>
          {props.id === 9 && (
            <Accordion isCompact>
              <AccordionItem key="1" aria-label="Accordion 1" title="참가 신청 인원">
                <Card>
                  <CardBody>
                    {defaultContent}
                  </CardBody>
                </Card>

              </AccordionItem>
            </Accordion>
          )}
          <div className="studyItem_seperator__1rRiE"></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="studyItem_studyItem__1Iipn studyItem_open__1PGn-">
          <div>
            <li>
              <div className="studyItem_badgeWrapper__3AW7k">
                <div className="badge_badge__ZfNyB">
                  <div className="badge_study__39LDm">🗂 세미나</div>
                </div>
                <div className="badge_badge__ZfNyB">
                  <div className="badge_new__DZ5tY">🍞 따끈따끈 새 글</div>
                </div>
              </div>
              <div className="studyItem_schedule__3oAnA">
                <p className="studyItem_scheduleTitle__1KN_9">마감일 |</p>
                <p>2023.12.31</p>
              </div>
              <a href="/meeting/detail/0">
                <h1 className="studyItem_title__2B_2o">제2회 지식 창업 부업 기초 강의</h1>
              </a>
              <ul className="studyItem_positionList__1jzi_">
                <li className="studyItem_position__2sRRD">창업 초보</li>
              </ul>
              <ul className="studyItem_content__1mJ9M">
                {props.id === 9 && (
                  <li>
                    <div className="commentInput_buttonWrapper__2f_l9">
                      {/* <button className="commentInput_buttonComplete__24z4R" name="register">팀 페이지</button> */}
                      <TeamPageBtn />
                    </div>
                  </li>
                )}
              </ul>
              <div className="studyItem_border__2zAjs">
              </div>
              <section className="studyItem_info__OFIQU">
                <div className="studyItem_userInfo__1KkGa">
                  <div className="avatar_user__1Pgut">
                    <img className="avatar_userImg__hogPI" width="30px" height="30px" src="/images/bnk.png" alt="avatar" />
                  </div>
                  <div>minsemanse</div>
                </div>
                <div className="studyItem_viewsAndComment__1Bxpj">
                  <div className="studyItem_infoItem__3vxSf">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#999999" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(153, 153, 153)" }}>
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                      </path>
                    </svg>
                    <p>14</p>
                  </div>
                </div>
              </section>
              <img className="studyItem_bookmark__2YtKX" src="/images/bookmark.png" alt="bookmark" />
            </li>
          </div>
          {props.id === 9 && (
            <Accordion isCompact>
              <AccordionItem key="1" aria-label="Accordion 1" title="참가 신청 인원">
                <Card>
                  <CardBody>
                    {defaultContent}
                  </CardBody>
                </Card>

              </AccordionItem>
            </Accordion>
          )}
          <div className="studyItem_seperator__1rRiE"></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="studyItem_studyItem__1Iipn studyItem_open__1PGn-">
          <div>
            <li>
              <div className="studyItem_badgeWrapper__3AW7k">
                <div className="badge_badge__ZfNyB">
                  <div className="badge_study__39LDm">🗂 스터디</div>
                </div>
                <div className="badge_badge__ZfNyB">
                  <div className="badge_new__DZ5tY">🍞 따끈따끈 새 글</div>
                </div>
              </div>
              <div className="studyItem_schedule__3oAnA">
                <p className="studyItem_scheduleTitle__1KN_9">마감일 |</p>
                <p>2023.12.31</p>
              </div>
              <a href="/meeting/detail/0">
                <h1 className="studyItem_title__2B_2o">백엔드 / 데이터 엔지니어링 면접 스터디</h1>
              </a>
              <ul className="studyItem_positionList__1jzi_">
                <li className="studyItem_position__2sRRD">백엔드</li>
                <li className="studyItem_position__2sRRD">데브옵스</li>
              </ul>
              <ul className="studyItem_content__1mJ9M">
                {props.id === 9 && (
                  <li>
                    <div className="commentInput_buttonWrapper__2f_l9">
                      {/* <button className="commentInput_buttonComplete__24z4R" name="register">팀 페이지</button> */}
                      <TeamPageBtn />
                    </div>
                  </li>
                )}
              </ul>
              <div className="studyItem_border__2zAjs">
              </div>
              <section className="studyItem_info__OFIQU">
                <div className="studyItem_userInfo__1KkGa">
                  <div className="avatar_user__1Pgut">
                    <img className="avatar_userImg__hogPI" width="30px" height="30px" src="/images/bnk.png" alt="avatar" />
                  </div>
                  <div>Yonng-Seok</div>
                </div>
                <div className="studyItem_viewsAndComment__1Bxpj">
                  <div className="studyItem_infoItem__3vxSf">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#999999" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(153, 153, 153)" }}>
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                      </path>
                    </svg>
                    <p>9</p>
                  </div>
                </div>
              </section>
              <img className="studyItem_bookmark__2YtKX" src="/images/bookmark.png" alt="bookmark" />
            </li>
          </div>
          {props.id === 9 && (
            <Accordion isCompact>
              <AccordionItem key="1" aria-label="Accordion 1" title="참가 신청 인원">
                <Card>
                  <CardBody>
                    {defaultContent}
                  </CardBody>
                </Card>

              </AccordionItem>
            </Accordion>
          )}
          <div className="studyItem_seperator__1rRiE"></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="studyItem_studyItem__1Iipn studyItem_open__1PGn-">
          <div>
            <li>
              <div className="studyItem_badgeWrapper__3AW7k">
                <div className="badge_badge__ZfNyB">
                  <div className="badge_study__39LDm">🗂 취미</div>
                </div>
                <div className="badge_badge__ZfNyB">
                  <div className="badge_new__DZ5tY">🍞 따끈따끈 새 글</div>
                </div>
              </div>
              <div className="studyItem_schedule__3oAnA">
                <p className="studyItem_scheduleTitle__1KN_9">마감일 |</p>
                <p>2023.12.31</p>
              </div>
              <a href="/meeting/detail/0">
                <h1 className="studyItem_title__2B_2o">모루인형 만드는 공방 가실 분 구해요</h1>
              </a>
              <ul className="studyItem_positionList__1jzi_">
                <li className="studyItem_position__2sRRD">아무나</li>
              </ul>
              <ul className="studyItem_content__1mJ9M">
                {props.id === 9 && (
                  <li>
                    <div className="commentInput_buttonWrapper__2f_l9">
                      {/* <button className="commentInput_buttonComplete__24z4R" name="register">팀 페이지</button> */}
                      <TeamPageBtn />
                    </div>
                  </li>
                )}
              </ul>
              <div className="studyItem_border__2zAjs">
              </div>
              <section className="studyItem_info__OFIQU">
                <div className="studyItem_userInfo__1KkGa">
                  <div className="avatar_user__1Pgut">
                    <img className="avatar_userImg__hogPI" width="30px" height="30px" src="/images/bnk.png" alt="avatar" />
                  </div>
                  <div>Yonng-Seok</div>
                </div>
                <div className="studyItem_viewsAndComment__1Bxpj">
                  <div className="studyItem_infoItem__3vxSf">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#999999" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(153, 153, 153)" }}>
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                      </path>
                    </svg>
                    <p>9</p>
                  </div>
                </div>
              </section>
              <img className="studyItem_bookmark__2YtKX" src="/images/bookmark.png" alt="bookmark" />
            </li>
          </div>
          {props.id === 9 && (
            <Accordion isCompact>
              <AccordionItem key="1" aria-label="Accordion 1" title="참가 신청 인원">
                <Card>
                  <CardBody>
                    {defaultContent}
                  </CardBody>
                </Card>

              </AccordionItem>
            </Accordion>
          )}
          <div className="studyItem_seperator__1rRiE"></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="studyItem_studyItem__1Iipn studyItem_open__1PGn-">
          <div>
            <li>
              <div className="studyItem_badgeWrapper__3AW7k">
                <div className="badge_badge__ZfNyB">
                  <div className="badge_study__39LDm">🗂 프로젝트</div>
                </div>
                <div className="badge_badge__ZfNyB">
                  <div className="badge_new__DZ5tY">🍞 따끈따끈 새 글</div>
                </div>
              </div>
              <div className="studyItem_schedule__3oAnA">
                <p className="studyItem_scheduleTitle__1KN_9">마감일 |</p>
                <p>2023.12.31</p>
              </div>
              <a href="/meeting/detail/0">
                <h1 className="studyItem_title__2B_2o">'설맞이 떡국을 부탁해' 프로젝트의 웹 개발자님을 찾고있습니다.</h1>
              </a>
              <ul className="studyItem_positionList__1jzi_">
                <li className="studyItem_position__2sRRD">프론트엔드</li>
                <li className="studyItem_position__2sRRD">백엔드</li>
              </ul>
              <ul className="studyItem_content__1mJ9M">
                {props.id === 9 && (
                  <li>
                    <div className="commentInput_buttonWrapper__2f_l9">
                      {/* <button className="commentInput_buttonComplete__24z4R" name="register">팀 페이지</button> */}
                      <TeamPageBtn />
                    </div>
                  </li>
                )}
              </ul>
              <div className="studyItem_border__2zAjs">
              </div>
              <section className="studyItem_info__OFIQU">
                <div className="studyItem_userInfo__1KkGa">
                  <div className="avatar_user__1Pgut">
                    <img className="avatar_userImg__hogPI" width="30px" height="30px" src="/images/bnk.png" alt="avatar" />
                  </div>
                  <div>abloom</div>
                </div>
                <div className="studyItem_viewsAndComment__1Bxpj">
                  <div className="studyItem_infoItem__3vxSf">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#999999" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(153, 153, 153)" }}>
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                      </path>
                    </svg>
                    <p>4</p>
                  </div>
                </div>
              </section>
              <img className="studyItem_bookmark__2YtKX" src="/images/bookmark.png" alt="bookmark" />
            </li>
          </div>
          {props.id === 9 && (
            <Accordion isCompact>
              <AccordionItem key="1" aria-label="Accordion 1" title="참가 신청 인원">
                <Card>
                  <CardBody>
                    {defaultContent}
                  </CardBody>
                </Card>

              </AccordionItem>
            </Accordion>
          )}
          <div className="studyItem_seperator__1rRiE"></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}
        <div className="studyItem_studyItem__1Iipn studyItem_open__1PGn-">
          <div>
            <li>
              <div className="studyItem_badgeWrapper__3AW7k">
                <div className="badge_badge__ZfNyB">
                  <div className="badge_study__39LDm">🗂 프로젝트</div>
                </div>
                <div className="badge_badge__ZfNyB">
                  <div className="badge_new__DZ5tY">🍞 따끈따끈 새 글</div>
                </div>
              </div>
              <div className="studyItem_schedule__3oAnA">
                <p className="studyItem_scheduleTitle__1KN_9">마감일 |</p>
                <p>2023.12.31</p>
              </div>
              <a href="/meeting/detail/0">
                <h1 className="studyItem_title__2B_2o">[프론트] - 새로운 트렌디한 마켓플레이스 제작 팀원 모집</h1>
              </a>
              <ul className="studyItem_positionList__1jzi_">
                <li className="studyItem_position__2sRRD">프론트엔드</li>
              </ul>
              <ul className="studyItem_content__1mJ9M">
                {props.id === 9 && (
                  <li>
                    <div className="commentInput_buttonWrapper__2f_l9">
                      {/* <button className="commentInput_buttonComplete__24z4R" name="register">팀 페이지</button> */}
                      <TeamPageBtn />
                    </div>
                  </li>
                )}
              </ul>
              <div className="studyItem_border__2zAjs">
              </div>
              <section className="studyItem_info__OFIQU">
                <div className="studyItem_userInfo__1KkGa">
                  <div className="avatar_user__1Pgut">
                    <img className="avatar_userImg__hogPI" width="30px" height="30px" src="/images/bnk.png" alt="avatar" />
                  </div>
                  <div>abloom</div>
                </div>
                <div className="studyItem_viewsAndComment__1Bxpj">
                  <div className="studyItem_infoItem__3vxSf">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#999999" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(153, 153, 153)" }}>
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                      </path>
                    </svg>
                    <p>4</p>
                  </div>
                </div>
              </section>
              <img className="studyItem_bookmark__2YtKX" src="/images/bookmark.png" alt="bookmark" />
            </li>
          </div>
          {props.id === 9 && (
            <Accordion isCompact>
              <AccordionItem key="1" aria-label="Accordion 1" title="참가 신청 인원">
                <Card>
                  <CardBody>
                    {defaultContent}
                  </CardBody>
                </Card>

              </AccordionItem>
            </Accordion>
          )}
          <div className="studyItem_seperator__1rRiE"></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------- */}





        {/* {projects.map((project) => (
          <div>
            <a className="studyItem_studyItem__1Iipn studyItem_open__1PGn-" href="/meeting/detail/0">
              <li>
                <div className="studyItem_badgeWrapper__3AW7k">
                  <div className="badge_badge__ZfNyB">
                    <div className="badge_study__39LDm">🗂 프로젝트</div>
                  </div>
                  <div className="badge_badge__ZfNyB">
                    <div className="badge_new__DZ5tY">🍞 따끈따끈 새 글</div>
                  </div>
                </div>
                <div className="studyItem_schedule__3oAnA">
                  <p className="studyItem_scheduleTitle__1KN_9">마감일 |</p>
                  <p>2023.12.31</p>
                </div>
                <h1 className="studyItem_title__2B_2o">'예비 부부를 위한 결혼 문답 앱, 메리' UI/UX 디자이너 모집</h1>
                <ul className="studyItem_positionList__1jzi_">
                  <li className="studyItem_position__2sRRD">디자이너</li>
                </ul>
                <ul className="studyItem_content__1mJ9M">
                  <li className="studyItem_language__20yqw">
                    <img className="studyItem_languageImage__1AfGa" title="figma" src="/images/languages/figma.svg" alt="language" />
                  </li>
                </ul>
                <div className="studyItem_border__2zAjs">
                </div>
                <section className="studyItem_info__OFIQU">
                  <div className="studyItem_userInfo__1KkGa">
                    <div className="avatar_user__1Pgut">
                      <img className="avatar_userImg__hogPI" width="30px" height="30px" src="/images/bnk.png" alt="avatar" />
                    </div>
                    <div>abloom</div>
                  </div>
                  <div className="studyItem_viewsAndComment__1Bxpj">
                    <div className="studyItem_infoItem__3vxSf">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#999999" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(153, 153, 153)" }}>
                        <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                        </path>
                      </svg>
                      <p>4</p>
                    </div>
                  </div>
                </section>
                <img className="studyItem_bookmark__2YtKX" src="/images/bookmark.png" alt="bookmark" />
              </li>
            </a>
            {props.id === 9 && (
              <div className="commentInput_buttonWrapper__2f_l9">
                <button className="commentInput_buttonComplete__24z4R" name="register">댓글 등록</button>
              </div>
            )}
            <div className="studyItem_seperator__1rRiE"></div>
          </div>



        ))} */}


     

      </ul>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            borderRadius:'50px',
            height: '65%',
            width: '30%',
            margin: 'auto',
          },
        }}
      >
        <div>
          <div class="userDetailModal_upSection__1Xqnt">
            <div class="userDetailModal_modalHeader__HGpI1">
              <Button style={{backgroundColor:'transparent'}}onClick={closeModal}>
                <img class="userDetailModal_backButton__1-HjB" src="https://holaworld.io/images/info/close.png" alt="backBtn" />
                </Button>
              </div>
            <div class="userDetailModal_avatarContainer__3jvPa">
              <img class="userDetailModal_avatar__2MlM7" src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG" alt="user avatar" />

            </div>
          </div>
          <div class="userDetailModal_modalContent__2QmRv">
            <div class="userDetailModal_modalContent__2QmRv">강민세</div>
            <div class="userDetailModal_careerInfo__1niLG">
              <div class="userDetailModal_position__3aTFw">프론트엔드 개발자</div>
              <div class="userDetailModal_workExperience__3mlu0">1년차</div>
            </div>
            <div class="userDetailModal_likeLanguagesConatiner__1agju">
              <div class="userDetailModal_languagesText__1WOWx">관심 스택</div>
              <ul class="userDetailModal_likeLanguages__FNuBZ">
                <li class="userDetailModal_languageItem__15MoB">React</li>
              </ul>
            </div>
            <div class="userDetailModal_introduces__1-ahE">만나서 반가워요!</div>
            <ul class="userDetailModal_urls__3Loqg"></ul>
          </div>
        </div>
      </Modal>
    </div>
  )
}
