'use client'
import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import ComboBox from '@/components/comboBox/ComboBox.jsx';
import DisabledComboBox from '@/components/comboBox/DisabledComboBox';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import RegisterEditor from '@/components/editor/RegisterEditor'
import { useInput } from "@/hooks/useInput";

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

export default function page() {
  const [category, setCategory] = useState("봉사");
  const [recruitCnt, changeRecruitCnt] = useInput("");
  const [onOffStatus, setOnOffStatus] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const [dueDate, setDueDate] = useState(0);
  const [title, setTitle] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [chattingUrl, changechattingUrl] = useInput("");

  const register = async () => {
    // 원하는 형식으로 날짜 포맷팅
    const formatStartDate = dayjs(startDate).format("YYYY-MM-DD");
    const formatEndDate = dayjs(endDate).format("YYYY-MM-DD");
    const formatDueDate = dayjs(dueDate).format("YYYY-MM-DD");
    try {
      const response = await axios.post('http://192.168.0.142:3200/board/saveStudyProjectBoard', {
        category: category,
        title: title,
        description: editorContent,
        recruitCnt: recruitCnt,
        onOffStatus: onOffStatus.value,
        chattingUrl: chattingUrl,
        startDate: formatStartDate,
        endDate: formatEndDate,
        dueDate: formatDueDate,
        location: "",

        userId: "1111111",

      }
      );
      console.log(response)
    } catch (error) {
      console.log(error)

    }
  };

  const handleEditorContentChange = (html) => {
    setEditorContent(html);
  };

  const CalendarButton = ({ label, onChange, selectedDate }) => {
    return (
      <div className="labelContainer">

        <label>{label}</label>
        <DatePicker
          className="datePicker"
          selected={selectedDate}
          onChange={onChange}
          dateFormat="yyyy-MM-dd"
        />

      </div>
    );
  };
  
  const OnOffStatusComboBox = ({ label, options }) => {
    const handleSelectChange = (option) => {
      setOnOffStatus(option);
    };

    return (
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{label}</div>
        <ComboBox
          options={options}
          onChange={handleSelectChange}
          value={onOffStatus}
        />
      </div>
    );
  };

  const CategoryComboBox = ({ label, options }) => {
    const [selectedOption, setSelectedOption] = useState({ value: '봉사', label: '봉사' });
    const handleSelectChange = (option) => {
      setCategory(option.value);
      setSelectedOption(option);
    };

    return (
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{label}</div>
        <DisabledComboBox
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
              <CategoryComboBox
                label="모집구분"
                options={[
                  { value: '스터디', label: '스터디' },
                  { value: '프로젝트', label: '프로젝트' },
                  { value: '취미', label: '취미' },
                  { value: '봉사', label: '봉사' },
                  { value: '세미나', label: '세미나' },
                ]} />
            </li>
            <li className="postinfo_listItem__OFhXr">
              <div className="labelContainer">
                <label>모집인원</label>
                <input
                  value={recruitCnt}
                  onChange={changeRecruitCnt}
                  type="text"
                  placeholder="입력하세요"
                  style={{
                    height: '55px',
                    fontSize: '15px',
                    border: '1px solid #ccc', // 테두리 스타일 추가
                    borderRadius: '4px', // 테두리 모서리를 둥글게 만듭니다.
                    padding: '8px', // 텍스트와 테두리 사이의 여백을 추가합니다.
                  }} />
              </div>
            </li>
          </ul>
          <ul className="postinfo_inputList__3SKF-">
            <li className="postinfo_listItem__OFhXr">
              <OnOffStatusComboBox
                label="진행방식"
                options={[
                  { value: '1', label: '온라인' },
                  { value: '2', label: '오프라인' },
                  { value: '3', label: '온/오프라인' },
                  { value: '4', label: '미정' },
                ]} />
            </li>
            <li className="postinfo_listItem__OFhXr">
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ width: '236px' }}>
                  <CalendarButton
                    label="활동 시작일"
                    onChange={(e) => {
                      setStartDate(e)
                    }}
                    selectedDate={startDate} />
                </div>
                <div style={{ width: '236px' }}>
                  <CalendarButton
                    label="활동 마감일"
                    onChange={(e) => {
                      setEndDate(e)
                    }}
                    selectedDate={endDate} />
                </div>
              </div>
            </li>
          </ul>
          <ul className="postinfo_inputList__3SKF-">
            
            <li className="postinfo_listItem__OFhXr">
              <CalendarButton
                label="모집마감일"
                onChange={(e) => {
                  setDueDate(e)
                }}
                selectedDate={dueDate} />
            </li>
          
            
            <li className="postinfo_listItem__OFhXr">
              <div className="labelContainer">
                <label>카카오톡 오픈채팅</label>
                <input
                  value={chattingUrl}
                  onChange={changechattingUrl}
                  type="text"
                  placeholder="입력하세요"
                  style={{
                    height: '55px',
                    fontSize: '15px',
                    border: '1px solid #ccc', // 테두리 스타일 추가
                    borderRadius: '4px', // 테두리 모서리를 둥글게 만듭니다.
                    padding: '8px', // 텍스트와 테두리 사이의 여백을 추가합니다.
                  }} />
              </div>
            </li>
          </ul>
        </section>

        <section>
          <div className="postRegister_postContentWrapper__3BXZ6">
            <span className="postRegister_sequence__nC1Px">2</span>
            <h2 className="postRegister_text__17jg3">프로젝트에 대해 소개해 주세요.</h2>
          </div>

          <label className="input_labelText__3R2TI" for="input">제목</label>
          <input className="input_customInput__1e1Il" id="input" placeholder="글 제목을 입력해주세요!" value={title} onChange={(e) => setTitle(e.target.value)}></input>
          {/* <QuillWrapper style={{ height: '500px' }} modules={modules} formats={formats} theme="snow" onChange={(e) => { setContent(e) }} value={content} /> */}
          <div
            style={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '8px',
              marginBottom: '10px',
              height: '500px'
            }}
          >
            <RegisterEditor 
            onContentChange={handleEditorContentChange} />     
          </div>
        </section>
        <section className="writebutton_buttons__2qW83">
          <button className="writebutton_cancelButton__2W7b_">취소</button>
          <button className="writebutton_registerButton__n_O2M" onClick={register}>글 등록</button>
        </section>
      </div>
    </div>

  )
}
