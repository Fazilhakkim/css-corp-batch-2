import React, { useState } from 'react';
import Input from '../components/input';
import Select from '../components/select';
import '../index.css';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [cities, setCities] = useState([]);
  const units = [
    {
      value: 'C',
      text: 'Celsius',
    },
    {
      value: 'F',
      text: 'Farenheit',
    },
  ];
  const loadCities = async (city) => {
    try {
      const res = await fetch(`https://api.weatherserver.com/weather/cities/${city}`);
      const json = await res.json();
      console.log(json);
      setCities(json.results);
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeLocationInput = (event) => {
    const city = event.target.value;
    setLocation(city);
    loadCities(city);
  };
  return (
    <div className="flex justify-center">
      <div className="weather-app bg-[#FAFAFA] h-screen border-4 p-4 w-3/6">
        <div className="weather-title mb-2">
          <h1 className="border-b-2 border-rose-500">WeatherWatch</h1>
        </div>
        <div className="weather-input-parent flex">
          <Input label="Location" id="location-txt" onChange={onChangeLocationInput} value={location} />
          <Select label="Units" id="temp-units" options={units} />
        </div>
        {location.length > 0
          && (
          <div className="weather-city-dropdown relative">
            <div className="absolute dropdown-result bg-[#FFFFFF] flex w-full h-20 p-2">
              <ul className="flex items-center justify-center space-x-6 px-4">
                {cities.length === 0 && (
                <ul className="flex items-center justify-center space-x-6 px-4">
                  <li><a href="#!">city details not found</a></li>
                </ul>
                )}
                {
                    cities.map((city) => (
                      <li className="dropdown-results" key={city.name}>
                        <a href="!#">{city.name}</a>
                      </li>
                    ))
                  }

              </ul>
            </div>
          </div>
          )}
        <div className="weather-city-display flex">
          <div className="city-name flex flex-col">
            <p>Bangalore</p>
            <p>
              Scattered Clouds &nbsp;
              <span>|</span>
                    &nbsp; 30 C
            </p>
          </div>
          <div className="cloud-image">
            <img src="../../images/cloud-icon.svg" width="100" height="80" alt="svg-cloud" />
          </div>
        </div>
        <div className="weather-details">
          <div className="weather-temperature flex justify-between">
            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
              <p>Current Temperature</p>
              <p>29 C</p>
            </div>
            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
              <p>Maximum Temperature</p>
              <p>29 C</p>
            </div>
            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
              <p>Minimum Temperature</p>
              <p>29 C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
