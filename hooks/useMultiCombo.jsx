import { useState } from "react";
import Select from 'react-select';

export function useMultiCombo(initialValue, label) {
    const [selectedOptions, setSelectedOptions] = useState([]);   
    const options = initialValue.map(initialValue => ({ value: initialValue, label: initialValue }));

    const handleChange = (selected) => {
      setSelectedOptions(selected);
    };

    const renderMultiCombo = () => (
        <div>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{label}</div>
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
              height: '55px',
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
      </div>
    )

    return [selectedOptions, renderMultiCombo];
  };