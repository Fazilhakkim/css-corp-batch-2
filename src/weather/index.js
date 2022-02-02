/* eslint-disable keyword-spacing */
import React, {
  memo, useCallback, useReducer,
} from 'react';
import Input from '../components/input';
import Searchresult from '../components/searchResult';
import Select from '../components/select';
import TemperatureResults from '../components/temperature-results';
import { units } from '../constants/variables';
import '../index.css';
import { weatherInitValue, weatherReducer } from '../reducers/weatherReducers';

const Weather = () => {
  /* const [location, setLocation] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [unit, setUnit] = useState('C'); */
  const [state, dispatch] = useReducer(weatherReducer, weatherInitValue);
  const {
    location, cities, selectedCity, unit,
  } = state;
  const loadCities = useCallback(async (city) => {
    try {
      dispatch({ type: 'LOAD_CITY_REQUEST' });
      const res = await fetch(`https://api.weatherserver.com/weather/cities/${city}`);
      const json = await res.json();
      console.log(json);
      dispatch({ type: 'LOAD_CITY', payload: json.results });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'LOAD_CITY_FAIL', payload: error });
    }
  }, []);
  const getCityInfo = useCallback(async (cityId) => {
    try {
      dispatch({ type: 'LOAD_SELECTED_CITY_REQUEST' });
      const res = await fetch(`https://api.weatherserver.com/weather/current/${cityId}/${unit}`);
      const json = await res.json();
      console.log(json);
      dispatch({ type: 'LOAD_SELECTED_CITY', payload: json });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'LOAD_SELECTED_CITY_FAIL', payload: error });
    }
  }, [unit]);
  const onChangeLocationInput = useCallback((event) => {
    const city = event.target.value;
    dispatch({ type: 'CHANGE_LOCATION', payload: city });
    loadCities(city);
  }, [loadCities]);
  const onUnitChange = useCallback((event) => {
    dispatch({ type: 'CHANGE_UNIT', payload: event.target.value });
  }, []);
  const {
    location: cityLocation, conditions, icon, temp, temp_min, temp_max, pressure, humidity,
  } = selectedCity || {};
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
        <div className="weather-city-display flex justify-between mt-5">
          <div className="city-name flex flex-col">
            <h2>{cityLocation}</h2>
            <p>
              {conditions}
               &nbsp;
              {selectedCity?.feels_like && <span className="p-3">|</span>}
              <span>{selectedCity?.feels_like}</span>
            </p>
          </div>
          <div className="cloud-image">
            {icon && <img src={icon} alt="svg-cloud" />}
          </div>
        </div>
        {cityLocation && (
          <TemperatureResults
            temp={temp}
            temp_max={temp_max}
            temp_min={temp_min}
            pressure={pressure}
            humidity={humidity}
          />
        )}
      </div>
    </div>
  );
};

export default memo(Weather);
