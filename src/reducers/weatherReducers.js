export const weatherInitValue = {
  location: '',
  cities: [],
  selectedCity: null,
  unit: 'C',
  loading: false,
  error: null,
};
export const weatherReducer = (state, { type, payload }) => {
  console.log(`state values${state}`);
  switch (type) {
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
