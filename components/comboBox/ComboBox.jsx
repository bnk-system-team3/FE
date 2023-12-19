import React from 'react';
import Select from 'react-select';

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