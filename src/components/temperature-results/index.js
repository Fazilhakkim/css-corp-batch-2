import React, { memo } from 'react';

const TemperatureResults = ({ ...props }) => (
  <div className="weather-details">
    <div className="weather-temperature flex justify-between">
      <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
        <p>Current Temperature</p>
        <p>{props.temp}</p>
      </div>
      <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
        <p>Maximum Temperature</p>
        <p>{props.temp_max}</p>
      </div>
      <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
        <p>Minimum Temperature</p>
        <p>{props.temp_min}</p>
      </div>
    </div>
    <div className="weather-flow flex justify-between">
      <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
        <p>Wind Speed</p>
      </div>
      <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
        <p>Wind Direction</p>
      </div>
    </div>
    <div className="humidity-details flex justify-between">
      <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
        <p>Pressure</p>
        <p>{props.pressure}</p>
      </div>
      <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
        <p>Humidity</p>
        <p>{props.humidity}</p>
      </div>
    </div>
  </div>
);

export default memo(TemperatureResults);
