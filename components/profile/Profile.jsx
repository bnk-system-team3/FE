'use client'


import React, { useState, useEffect, useMemo } from 'react'
import ComboBox from '@/components/comboBox/ComboBox.jsx';
import Select from 'react-select';
import axios from 'axios';

const positions = ['프론트앤드', '백앤드', '디자이너', 'IOS', '안드로이드', '데브옵스', 'PM', '기획자'];
const formattedPositions = positions.map(position => ({ value: position, label: position }));

export default function Profile() {
  const [selectedOptions, setSelectedOptions] = useState([
    { value: "C", label: "C" },
    { value: "C#", label: "C#" },
  ]);
  const [positions, setPositions] = useState([
    { value: "백엔드", label: "백엔드" },
  ]);
  const [positionLabel, setPositionLabel] = useState("백엔드");
  const [nickname, setNickname] = useState("121212");

  const techStack = selectedOptions.map(item => item.label);

  const IndexPage = ({ label, options }) => {
    const handleSelectChange = (option) => {
      setPositions(option);
      setPositionLabel(option.label)
    };

    return (
      <div>
        <label className="css-1n7wtqw">{label}<span className="css-1xtz61h">*</span></label>
        <div >
          <ComboBox
            options={options}
            onChange={handleSelectChange}
            value={positions}
          />
        </div>
      </div>



    );
  };

  const modifyProfile = async () => {

    console.log(techStack);
    console.log(positionLabel);
    console.log(nickname);
    debugger
    try {
      const response = await axios.post('http://192.168.0.103:3200/user/updateProfile', {
        techStack: techStack,
        position: positionLabel,
        nickname: nickname,
        userId: "2222222"
      }
      );
      console.log(response)
    } catch (error) {
      console.log(error)
      console.log(error)
      debugger
      
    }
  };


  const MySelect = () => {
    const skills = [
      'C', 'C++', 'C#', 'Java', 'JavaScript', 'Python', 'Spring', 'MySQL', 'MSSQL', 'Next.js',
      'React', 'TypeScript', 'Vue', 'Node.js', 'Nest.js', 'Express', 'Go', 'Django', 'Swift',
      'Kotlin', 'MongoDB', 'PHP', 'GraphQL', 'FireBase', 'ReactNative', 'Unity', 'Flutter', 'AWS',
      'Kubernetes', 'Docker', 'Git', 'Figma', 'Zeplin'
    ];

    const options = skills.map(skill => ({ value: skill, label: skill }));

    const handleChange = (selected) => {
      setSelectedOptions(selected);
    };

    return (
      <Select
        options={options}
        value={selectedOptions}
        isMulti
        onChange={handleChange}
        styles={{
          control: (provided) => ({
            ...provided,
            border: '1px solid rgb(204, 204, 204)',
            borderRadius: '5px',
            width: '470px',
            height: '53px',
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#f0f0f0', // Customize the background color of selected items
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            cursor: 'pointer',
          }),
        }}

      />
    );
  };

  return (
    <div>
      <div className="css-gq3aoy">
        <div className="style_imageContainer__3wrgm">
          <label className="style_profileContainer__1ej4M">
            <img className="style_userImg__1ujTt" src="/images/bnk.png" alt="user avatar" />
            <img className="style_profileEditBtn__3NSbU" src="/images/profile_edit.png" alt="profile edit" />
          </label>
        </div>
        <div className="css-nkt5tk">GeonWoo님 환영해요.</div>
        <form className="css-1cw2qsn">
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">
              닉네임
              <span className="css-1xtz61h">*</span>
            </div>
            <input onChange={(e) => setNickname(e.target.value)} value={nickname} placeholder="닉네임을 입력해주세요" name="nickName" className="css-1ltmxea" />
          </div>

          <IndexPage
            label="직무"
            options={formattedPositions} />

          <div className="css-17yaykr">
            <div className="css-uf1ume">
              <div className="css-1n7wtqw">소속</div>
            </div>
            <div className="css-1ltmxea">SM 2부</div>
          </div>
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">이메일</div>
            <div className="css-1ltmxea">GeonWoo@bnksys.co.kr</div>
          </div>
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">관심스택
              <span className="css-1xtz61h">*</span>
            </div>

          <MySelect />
          </div>
          <div className="css-17yaykr">
            <div className="css-1n7wtqw">포인트</div>
            <div className="css-1n7wtqw">3</div>
          </div>
          
          
          <div className="css-ndq9l2">
            <button onClick={modifyProfile} type="submit" className="css-u7euz2">프로필 저장</button>
            <div className="css-12jw1xy">회원 탈퇴</div>
          </div>
        </form>
      </div>
    </div>
  )
}
