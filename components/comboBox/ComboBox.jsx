import React from 'react';
import Select from 'react-select';
//import styled from 'styled-components';

// const StyledSelect = styled(Select)`
//   width: 150px;
//   height: 100px;
// `



const ComboBox = ({ options, onChange, value }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      placeholder="선택하세요"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height:'55px'
        }),
      }}
    />
  );
};

export default ComboBox;