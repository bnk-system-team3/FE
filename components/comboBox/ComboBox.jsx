import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '38px', // 원하는 높이로 조절해주세요
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: '2px', // 원하는 간격으로 조절해주세요
  }),
  height:'100px'
};

const ComboBox = ({ options, onChange, value }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      placeholder="선택하세요"
      
    />
  );
};

export default ComboBox;