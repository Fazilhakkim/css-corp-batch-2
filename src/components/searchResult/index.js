import React, { memo } from 'react';

const Searchresult = ({ cities, getCityInfo }) => {
  console.log('search result render');
  return (
    <div className="weather-city-dropdown relative">
      <div className="absolute dropdown-result bg-[#FFFFFF] flex w-full h-20 p-2">
        <div className="flex items-center justify-center space-x-6 px-4">
          {cities.length === 0 && (
          <div>city details not found</div>
          )}
          {
            cities.map((city) => (
              <div
                className="dropdown-results"
                key={city.name}
                onClick={() => getCityInfo(city.id)}
                role="button"
              >
                {city.name}
              </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default memo(Searchresult);
