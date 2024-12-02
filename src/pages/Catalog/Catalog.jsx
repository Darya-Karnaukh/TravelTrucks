import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import FilterList from "../../components/FilterList/FilterList.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectCampersLoading,
  selectCampersTotal,
} from "../../redux/campers/selectors.js";
import { getCampers } from "../../redux/campers/operations.js";
import { useEffect, useState } from "react";
import s from "./Catalog.module.css";
import Loader from "../../components/Loader/Loader.jsx";

const Catalog = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectCampersLoading);
  const error = useSelector((state) => state.campers.error);
  const total = useSelector(selectCampersTotal);
  const [page, setPage] = useState(1);
  const limit = 4;
  const dispatch = useDispatch();
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
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState(null);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(getCampers({ page: 1, limit }));
    }
  }, [dispatch, campers.length, limit]);

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

        if (!filters[key]) continue;

        if (typeof camper[key] === "boolean" && filters[key] !== camper[key]) {
          return false;
        }

        if (
          typeof camper[key] === "string" &&
          filters[key].toLowerCase() !== camper[key].toLowerCase()
        ) {
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

  const resetFilters = () => {
    setFilters({
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
    setAppliedFilters(null);
    setPage(1);
    setFilteredCampers([]);
  };

  const handleSearch = () => {
    resetFilters();

    const result = applyFilters(campers, filters);
    setFilteredCampers(result.slice(0, limit));
    setAppliedFilters(filters);
    setPage(1);

    if (result.length > 0) {
      iziToast.success({
        title: "Success!",
        message: "Filters successfully applied!",
        position: "topRight",
        backgroundColor: "#28a745",
        color: "white",
        timeout: 3000,
      });
    } else {
      iziToast.warning({
        title: "No results",
        message: "No campers found with the selected filters.",
        position: "topRight",
        backgroundColor: "#dc3545",
        color: "white",
        timeout: 3000,
      });
    }
  };

  const handleLoadMore = () => {
    if (loading || (!appliedFilters && campers.length >= total)) return;

    let nextPageData = [];

    if (appliedFilters) {
      const filtered = applyFilters(campers, appliedFilters);
      nextPageData = filtered.slice(page * limit, (page + 1) * limit);
      setFilteredCampers((prev) => [...prev, ...nextPageData]);
      setPage(page + 1);
    } else {
      const nextPage = page + 1;
      dispatch(getCampers({ page: nextPage, limit }));
      setPage(nextPage);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  const campersToShow = appliedFilters ? filteredCampers : campers;

  return (
    <div className={s.wrapper}>
      <FilterList
        onFilterChange={handleFilterChange}
        filters={filters}
        onSearch={handleSearch}
      />

      {loading && !appliedFilters ? (
        <Loader />
      ) : (
        <CatalogList
          campers={campersToShow}
          onLoadMore={handleLoadMore}
          hasMore={
            appliedFilters
              ? filteredCampers.length <
                applyFilters(campers, appliedFilters).length
              : campers.length < total
          }
          loading={loading}
        />
      )}
    </div>
  );
};

export default Catalog;
