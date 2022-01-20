import React from 'react';

const Select = ({ label, id, options }) => (
  <div className="weather-units flex-none p-2 bg-[#ffffff] pt-4 pb-4 rounded-lg flex flex-col">
    <label htmlFor={id}>
      {label}
    </label>
    <select className="select-units" id={id}>
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

export default Select;
