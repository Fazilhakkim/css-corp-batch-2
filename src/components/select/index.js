import React, { memo } from 'react';

const Select = ({ label, options, ...props }) => {
  console.log('select render');
  return (
    <div className="weather-units flex-none p-2 bg-[#ffffff] pt-4 pb-4 rounded-lg flex flex-col">
      <label htmlFor={props.id}>
        {label}
      </label>
      <select className="select-units" {...props}>
        {
        options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))
      }
      </select>
    </div>
  );
};

export default memo(Select);
