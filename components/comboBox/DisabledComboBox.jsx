import React from 'react';
import Select from 'react-select';

const DisabledComboBox = ({ options, onChange, value }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      placeholder="선택하세요"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height:'55px',
        }),
      }}
      isDisabled
    />
  );
};

export default DisabledComboBox;