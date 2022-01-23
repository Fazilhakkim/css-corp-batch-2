import React, {
  useState, memo, useCallback,
} from 'react';
import Input from '../components/input';
import Searchresult from '../components/searchResult';
import Select from '../components/select';
import '../index.css';

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

const Weather = () => {
  const [location, setLocation] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [unit, setUnit] = useState('C');
  const loadCities = useCallback(async (city) => {
    try {
      const res = await fetch(`https://api.weatherserver.com/weather/cities/${city}`);
      const json = await res.json();
      console.log(json);
      setCities(json.results);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const getCityInfo = useCallback(async (cityId) => {
    try {
      const res = await fetch(`https://api.weatherserver.com/weather/current/${cityId}/${unit}`);
      const json = await res.json();
      console.log(json);
      setSelectedCity(json);
      setLocation('');
    } catch (error) {
      console.log(error);
    }
  }, [unit]);
  const onChangeLocationInput = useCallback((event) => {
    const city = event.target.value;
    setLocation(city);
    loadCities(city);
  }, [loadCities]);
  const onUnitChange = useCallback((event) => {
    setUnit(event.target.value);
  }, []);
  console.log('weather html render');
  return (
    <div className="flex justify-center">
      <div className="weather-app bg-[#FAFAFA] h-screen border-4 p-4 w-3/6">
        <div className="weather-title mb-2">
          <h1 className="border-b-2 border-rose-500">WeatherWatch</h1>
        </div>
        <div className="weather-input-parent flex">
          <Input label="Location" id="location-txt" onChange={onChangeLocationInput} value={location} />
          <Select label="Units" id="temp-units" options={units} value={unit} onChange={onUnitChange} />
        </div>
        {location.length > 0
          && (
          <Searchresult cities={cities} getCityInfo={getCityInfo} />
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

export default memo(Weather);
