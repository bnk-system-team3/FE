'use client'
import React, { useState, useEffect, useMemo } from 'react'
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import ComboBox from '@/components/comboBox/ComboBox.jsx';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Select, SelectItem } from "@nextui-org/react";
import Editor from '@/components/editor/Editor'

const skills = ['C', 'C++', 'C#', 'Java', 'JavaScript', 'Python', 'Spring', 'MySQL', 'MSSQL', 'Next.js', 'React', 'TypeScript', 'Vue', 'Node.js', 'Nest.js', 'Express', 'Go', 'Django', 'Swift', 'Kotlin', 'MongoDB', 'PHP', 'GraphQL', 'FireBase', 'ReactNative', 'Unity', 'Flutter', 'AWS', 'Kubernetes', 'Docker', 'Git', 'Figma', 'Zeplin'];
const positions = ['프론트앤드', '백앤드', '디자이너', 'IOS', '안드로이드', '데브옵스', 'PM', '기획자'];

// 두 배열을 합쳐서 새로운 배열을 만듭니다.
const positionOptions = [...positions.map((position, index) => ({ value: `${index + 5}`, label: position }))];
const skillOptions = [...skills.map((skill, index) => ({ value: `${index + 5}`, label: skill }))];

const MultiComboBox = ({ onChange, options }) => {
  return (
    options && options.length > 0 ? (
      <Select
        label="Favorite Animal"
        placeholder="Select an animal"
        selectionMode="multiple"
        className="max-w-xs"
        onChange={onChange}
      >
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    ) : (
      <p>No options available</p>
    )
  );
}

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

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

export default function page() {
  const [category, setCategory] = useState(0);
  const [recruitCnt, setRecruitCnt] = useState("");
  const [onOffStatus, setOnOffStatus] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [skill, setSkill] = useState("");
  const [dueDate, setDueDate] = useState(0);
  const [position, setPosition] = useState("");
  const [chattingUrl, setChattingUrl] = useState("");
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [editorContent, setEditorContent] = useState("");

  const handleEditorContentChange = (html) => {
    setEditorContent(html);
  };



  const register = async () => {
    console.log();
    try {
      const response = await axios.post('http://192.168.0.142:3200/board/saveStudyProjectBoard', {

        category: "프로젝트",
        title: "title",
        description: "content",
        recruitCnt: 1,
        onOffStatus: 1,
        chattingUrl: "chattingUrl",
        startDate: "2023-11-27",
        endDate: "2023-11-27",
        dueDate: "2023-11-27",
        techStack: ["C", "C#"],
        positions: ["백엔드", "프론트엔드"],
        location: "",

        userId: "1111111",
        
      }
      );
      console.log(response)
    } catch (error) {
      console.log(error)

    }
  };

  const CalendarButton = ({ label, onChange, selectedDate }) => {

    return (
      <div>
        <div>
          <label>{label}</label>
          <DatePicker
            className="datePicker"
            selected={selectedDate}
            onChange={onChange}
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



  const handleSet = ({ label, option }) => {
    if (label === "진행방식") {
      setOnOffStatus(option.value);
    } else if (label === "기술스택") {
      setSkill(option.label);
    } else if (label === "모집포지션") {
      setPosition(option.label);
    }
  }

  const IndexPage = ({ label, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectChange = (option) => {
      handleSet(label, option);
      setSelectedOption(option);

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
    console.log(skill);
  }, [skill]);

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
                onChange={(e) => setRecruitCnt(e.target.value)}
                value={recruitCnt}
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
            <li>
              <CalendarButton
                label="시작날짜"
                onChange={(e) => {
                  setStartDate(e)

                }}
                selectedDate={startDate} />
              <CalendarButton
                label="끝날짜"
                onChange={(e) => {
                  setEndDate(e)
                }}
                selectedDate={endDate} />

            </li>
          </ul>
          <ul>
            <li className="postinfo_listItem__OFhXr">

              <div style={{ width: '1000px', backgroundColor: '#fff', borderColor: '#cdcdcd' }}>
                <MultiComboBox
                  options={skillOptions}
                  onChange={(e) => {
                    console.log(e.map(skill => skill.label))
                    setSkill(e.map(skill => skill.label));
                  }} />
              </div>


            </li>
            <li className="postinfo_listItem__OFhXr">

              <CalendarButton
                label="기간"
                onChange={(e) => {
                  setDueDate(e)
                }}
                selectedDate={dueDate} />
            </li>
          </ul>
          <ul className="postinfo_inputList__3SKF-">
            <li className="postinfo_listItem__OFhXr">
              <MultiComboBox
                options={positionOptions}
                onChange={(e) => {
                  setPosition(e.target.value);
                }} />


            </li>
            <li className="postinfo_listItem__OFhXr">
              <InputBox
                label="카카오톡 오픈채팅"
                onChange={(e) => setChattingUrl(e.target.value)}
                value={chattingUrl}
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
          <input className="input_customInput__1e1Il" id="input" placeholder="글 제목을 입력해주세요!" value={title} onChange={(e) => { setTitle(e) }}></input>
          <QuillWrapper style={{ height: '500px' }} modules={modules} formats={formats} theme="snow" onChange={(e) => { setContent(e) }} value={content} />
        </section>
        <section className="writebutton_buttons__2qW83">
          <button className="writebutton_cancelButton__2W7b_">취소</button>
          <button className="writebutton_registerButton__n_O2M" onClick={register}>글 등록</button>
        </section>
      </div>
      <Editor onContentChange={handleEditorContentChange} />
      <p>{editorContent}</p>
    </div>

  )
}
