import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import FilterList from "../../components/FilterList/FilterList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";
import { getCampers } from "../../redux/campers/operations.js";
import { useEffect, useState } from "react";
import s from "./Catalog.module.css";

const Catalog = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector((state) => state.campers.loading);
  const error = useSelector((state) => state.campers.error);

  const [filters, setFilters] = useState({
    location: "",
    vehicleType: "",
    TV: false,
    AC: false,
    kitchen: false,
    bathroom: false,
    microwave: false,
    water: false,
    radio: false,
    gas: false,
    transmission: "",
    engine: "",
  });

  const [filteredCampers, setFilteredCampers] = useState(campers); // Початковий список кемперів

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCampers(campers); // Оновлюємо filteredCampers після того, як campers оновиться
  }, [campers]);

  // Функція для застосування фільтрів
  const applyFilters = (campers, filters) => {
    return campers.filter((camper) => {
      if (
        filters.location &&
        !camper.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      if (filters.vehicleType && camper.form !== filters.vehicleType) {
        return false;
      }

      for (const key in filters) {
        if (key === "location") continue;

        if (!filters[key]) continue; // Пропускаємо неактивні фільтри

        if (typeof camper[key] === "boolean" && filters[key] !== camper[key]) {
          // Фільтр для чекбоксів
          return false;
        }

        if (
          typeof camper[key] === "string" &&
          filters[key].toLowerCase() !== camper[key].toLowerCase()
        ) {
          // Фільтр для рядкових значень
          return false;
        }
      }

      return true;
    });
  };

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleSearch = () => {
    const result = applyFilters(campers, filters);
    setFilteredCampers(result);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={s.wrapper}>
      <FilterList
        onFilterChange={handleFilterChange}
        filters={filters}
        onSearch={handleSearch}
      />

      {filteredCampers.length === 0 ? (
        <p>No campers found with these filters.</p>
      ) : (
        <CatalogList campers={filteredCampers} />
      )}
    </div>
  );
};

export default Catalog;
