'use client'
import React, { useState, useEffect, useMemo } from 'react'
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import ComboBox from '@/components/comboBox/ComboBox.jsx';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function page() {

  const [kind, setKind] = useState(0);
  const [people, setPeople] = useState("");
  const [method, setMethod] = useState(0);
  const [period, setPeriod] = useState(0);
  const [skill, setSkill] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [position, setPosition] = useState("");
  const [openchat, setOpenchat] = useState("");

  const skills= ['C', 'C++', 'C#', 'Java', 'JavaScript', 'Python', 'Spring', 'MySQL', 'MSSQL', 'Next.js', 'React', 'TypeScript', 'Vue', 'Node.js', 'Nest.js', 'Express', 'Go', 'Django', 'Swift', 'Kotlin', 'MongoDB', 'PHP', 'GraphQL', 'FireBase', 'ReactNative', 'Unity', 'Flutter', 'AWS', 'Kubernetes', 'Docker', 'Git', 'Figma', 'Zeplin'];
  const positions = ['프론트앤드', '백앤드', '디자이너', 'IOS', '안드로이드', '데브옵스', 'PM', '기획자'];

  // 두 배열을 합쳐서 새로운 배열을 만듭니다.
  const positionOptions = [ ...positions.map((position, index) => ({ value: `${index + 5}`, label: position }))];
  const skillOptions = [ ...skills.map((skill, index) => ({ value: `${index + 5}`, label: skill }))];
  
  const register = async () => {
    try {
      const response = await axios.post('/board/save', {
        inquirynm: title,
        inquirycntn: content,
      }
    );
    console.log(response)
    } catch (error) {
        alert("에러");
      
    }
  };

  const CalendarButton = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      handleSet(date);
      setSelectedDate(date);
    };

    const handleSet = ({date}) => {
      setDeadline(date);
    }

    return (
      <div style={{width: '500px'}}>
        <div>
        <label>모집마감일</label>
        <DatePicker
        className="datePicker"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        // 그 외 필요한 옵션들...
      />
      
      <button className="css-slyssw" tabindex="0" aria-label="Choose date, selected date is Dec 29, 2023">
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CalendarIcon">
              <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
            </svg>
            <span class="MuiTouchRipple-root css-w0pj6f"></span>
          </button>
        </div>
      </div>
    );
  };

  const InputBox = ({ label, onChange, value }) => {
   
    return (
      <div>
        <label>{label}</label>
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="입력하세요"
          style={{
            width: '500px',
            height: '38px',
            fontSize: '15px',
            border: '1px solid #ccc', // 테두리 스타일 추가
            borderRadius: '4px', // 테두리 모서리를 둥글게 만듭니다.
            padding: '8px', // 텍스트와 테두리 사이의 여백을 추가합니다.
          }} />
      </div>
    );
  }

  useEffect(() => {
    console.log(method); // 업데이트된 method 값 출력
  }, [method]); // method 값이 업데이트될 때만 useEffect 실행

const handleSet = ({label, option}) => {
  if(label === "진행방식"){
    setMethod(option.value);
  }else if(label === "기술스택"){
    setSkill(option.label);
  }else if(label === "모집포지션"){
    setPosition(option.label);
  }
}

  const IndexPage = ({ label, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectChange = (option) => {
      handleSet(label, option);
      setSelectedOption(option);
      
      debugger
      console.log(option)
    };

    return (
      <div>
        <label>{label}</label>
        <ComboBox
          options={options}
          onChange={handleSelectChange}
          value={selectedOption}
        />
      </div>
    );
  };

  const QuillWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

  useEffect(() => {
    console.log(skillOptions);
  }, []);

  return (
    <div>
      <div className="postRegister_postWrapper__1s7mv">
        <section>
          <div className="postRegister_postContentWrapper__3BXZ6">
            <span className="postRegister_sequence__nC1Px">1</span>
            <h2 className="postRegister_text__17jg3">프로젝트 기본 정보를 입력해주세요.</h2>
          </div>
          <ul className="postinfo_inputList__3SKF-">
            <li className="postinfo_listItem__OFhXr">
              <IndexPage
                label="모집구분"
                options={[
                  { value: 'study', label: '스터디' },
                  { value: 'project', label: '프로젝트' },
                ]} />
            </li>
            <li className="postinfo_listItem__OFhXr">
              <InputBox
                label="모집인원"
                onChange={(e) => setPeople(e.target.value)}
                value={people}
              />
            </li>
          </ul>
          <ul className="postinfo_inputList__3SKF-">
            <li className="postinfo_listItem__OFhXr">
              <IndexPage
                label="진행방식"
                options={[
                  { value: '1', label: '온라인' },
                  { value: '2', label: '오프라인' },
                  { value: '3', label: '온/오프라인' },
                  { value: '4', label: '미정' },
                ]} />
            </li>
            <li className="postinfo_listItem__OFhXr">
            <InputBox
                label="진행기간"
                onChange={(e) => setPeriod(e.target.value)}
                value={period}
              />
            </li>
          </ul>
          <ul className="postinfo_inputList__3SKF-">
            <li className="postinfo_listItem__OFhXr">
            <IndexPage
                label="기술스택"
                options={skillOptions} />

            </li>
            <li className="postinfo_listItem__OFhXr">
            
              <CalendarButton/>
            </li>
          </ul>
          <ul className="postinfo_inputList__3SKF-">
            <li className="postinfo_listItem__OFhXr">
            <IndexPage
                label="모집포지션"
                options=
                  {positionOptions}
                 />
            </li>
            <li className="postinfo_listItem__OFhXr">
            <InputBox
                label="카카오톡 오픈채팅"
                onChange={(e) => setOpenchat(e.target.value)}
                value={openchat}
              />
            </li>
          </ul>
        </section>

        <section>
          <div className="postRegister_postContentWrapper__3BXZ6">
            <span className="postRegister_sequence__nC1Px">2</span>
            <h2 className="postRegister_text__17jg3">프로젝트에 대해 소개해 주세요.</h2>
          </div>

          <label className="input_labelText__3R2TI" for="input">제목</label>
          <input className="input_customInput__1e1Il" id="input" placeholder="글 제목을 입력해주세요!" value=""></input>
          <QuillWrapper style={{ height: '500px' }} modules={modules} formats={formats} theme="snow" />
        </section>
        <section className="writebutton_buttons__2qW83">
          <button className="writebutton_cancelButton__2W7b_">취소</button>
          <button className="writebutton_registerButton__n_O2M" onClick={register}>글 등록</button>
        </section>
      </div>

    </div>

  )
}
