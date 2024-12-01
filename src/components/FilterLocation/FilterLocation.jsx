import { useState } from "react";
import SvgIcon from "../../hooks/SvgIcon";
import s from "./FilterLocation.module.css";

const FilterLocation = ({ location, onLocationChange }) => {
  const [searchValue, setSearchValue] = useState(location);
  const [suggestions, setSuggestions] = useState([]);

  const cities = [
    { city: "Kyiv", country: "Ukraine" },
    { city: "Poltava", country: "Ukraine" },
    { city: "Dnipro", country: "Ukraine" },
    { city: "Odesa", country: "Ukraine" },
    { city: "Kharkiv", country: "Ukraine" },
    { city: "Sumy", country: "Ukraine" },
    { city: "Lviv", country: "Ukraine" },
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const filteredCities = cities.filter(
      (city) =>
        city.city.toLowerCase().includes(value.toLowerCase()) ||
        city.country.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredCities);
  };

  const handleCitySelect = (city) => {
    const location = `${city.city}, ${city.country}`;
    setSearchValue(location);
    onLocationChange(`${city.country}, ${city.city}`);

    setSuggestions([]);
  };

  return (
    <div className={s.containerLocation}>
      <div className={s.containerIcon}>
        <SvgIcon className={s.icon} name="icon-Map" width="20" height="20" />

        <input
          className={s.input}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="City"
        />

        {suggestions.length > 0 && (
          <ul className={s.suggestions}>
            {suggestions.map((city, index) => (
              <li key={index} onClick={() => handleCitySelect(city)}>
                {city.city}, {city.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterLocation;
