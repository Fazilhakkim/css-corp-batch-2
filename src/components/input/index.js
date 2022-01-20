import React from 'react';

const Input = ({ label, ...props }) => (
  <div className="weather-input grow bg-[#ffffff] p-2 pt-4 pb-4 mr-1 rounded-lg flex flex-col">
    <label htmlFor={props.id}>
      {label}
    </label>
    <input type="text" className="focus:shadow-outline outline-none" {...props} />
  </div>
);

export default Input;
