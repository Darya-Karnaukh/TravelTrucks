import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import FilterList from "../../components/FilterList/FilterList.jsx";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";

const Catalog = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector((state) => state.campers.loading);
  const error = useSelector((state) => state.campers.error);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <FilterList />

      {!campers.length ? (
        <p>No campers found. Try searching!</p>
      ) : (
        <>
          <CatalogList campers={campers} />
        </>
      )}
    </div>
  );
};

export default Catalog;
