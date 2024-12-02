import { useDispatch } from "react-redux";
import ButtonSearch from "../ButtonSearch/ButtonSearch.jsx";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment.jsx";
import FilterLocation from "../FilterLocation/FilterLocation.jsx";
import s from "./FilterList.module.css";
import VehicleType from "../VehicleType/VehicleType.jsx";
import { resetSearchResults } from "../../redux/campers/slice.js";

const FilterList = ({ filters, onFilterChange, onSearch }) => {
  const dispatch = useDispatch();

  const handleLocationChange = (location) => {
    onFilterChange("location", location);
  };

  const handleCheckboxChange = (key) => (e) => {
    onFilterChange(key, e.target.checked);
  };

  const handleDynamicChange = (key, value) => {
    onFilterChange(key, value);
  };

  const handleSearch = () => {
    dispatch(resetSearchResults());
    onSearch();
  };

  return (
    <div className={s.filterList}>
      <div className={s.location}>
        <p>Location</p>
        <FilterLocation
          location={filters.location}
          onLocationChange={handleLocationChange}
        />
      </div>
      <div className={s.filter}>
        <p>Filters</p>
        <div className={s.vehicle}>
          <h3>Vehicle equipment</h3>
          <div className={s.vector}></div>
          <VehicleEquipment
            parameters={filters}
            onFilterChange={onFilterChange}
            handleCheckboxChange={handleCheckboxChange}
            handleDynamicChange={handleDynamicChange}
          />
        </div>
        <div className={s.vehicle}>
          <h3>Vehicle type</h3>
          <div className={s.vector}></div>
          <VehicleType
            selectedType={filters.vehicleType}
            onTypeChange={(type) => onFilterChange("vehicleType", type)}
          />
        </div>
      </div>
      <ButtonSearch onClick={handleSearch} />
    </div>
  );
};

export default FilterList;
