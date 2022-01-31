/* eslint-disable keyword-spacing */
import React, {
  memo, useCallback, useReducer,
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

const weatherInitValue = {
  location: '',
  cities: [],
  selectedCity: null,
  unit: 'C',
  loading: false,
  error: null,
};
const weatherReducer = (state, { type, payload }) => {
  console.log(`state values${state}`);
  switch(type) {
    case 'CHANGE_LOCATION':
      return { ...state, location: payload };
    case 'CHANGE_UNIT':
      return { ...state, unit: payload };
    case 'LOAD_CITY':
      return {
        ...state, cities: payload, loading: false, error: null,
      };
    case 'LOAD_SELECTED_CITY':
      return {
        ...state, selectedCity: payload, location: '', loading: false, error: null,
      };
    case 'LOAD_CITY_REQUEST':
    case 'LOAD_SELECTED_CITY_REQUEST':
      return { ...state, loading: true };
    case 'LOAD_CITY_FAIL':
    case 'LOAD_SELECTED_CITY_FAIL':
      return { ...state, error: payload, loading: false };
    default:
      break;
  }
};
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
    location: cityLocation, conditions, icon, temp, temp_min, temp_max,
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
        <div className="weather-details">
          <div className="weather-temperature flex justify-between">
            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
              <p>Current Temperature</p>
              <p>{temp}</p>
            </div>
            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
              <p>Maximum Temperature</p>
              <p>{temp_max}</p>
            </div>
            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
              <p>Minimum Temperature</p>
              <p>{temp_min}</p>
            </div>
          </div>
          <div className='weather-wind flex justify-between'>
            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
              <p>Current Temperature</p>
              <p>{temp}</p>
            </div>
            <div className="weather-info px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg flex flex-col justify-center text-center">
              <p>Current Temperature</p>
              <p>{temp}</p>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default memo(Weather);
