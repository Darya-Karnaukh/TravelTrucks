import { useSelector } from "react-redux";
import SvgIcon from "../../hooks/SvgIcon";
import { selectCampers } from "../../redux/campers/selectors";
import s from "./CatalogList.module.css";

const formatLocation = (location) => {
  const parts = location.split(", ");
  if (parts.length !== 2) {
    return location;
  }
  const [country, city] = parts;
  return `${city}, ${country}`;
};

const CatalogList = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector((state) => state.campers.loading);
  const error = useSelector((state) => state.campers.error);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!campers.length) {
    return <p>No campers found. Try searching!</p>;
  }

  return (
    <div>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <div className={s.images}>
              <img src={camper.gallery[0]?.thumb} alt={camper.name} />
            </div>
            <div className={s.containerTextContent}>
              <div className={s.containerTitleAndPrice}>
                <h2>{camper.name}</h2>
                <p>€{camper.price}</p>
                <SvgIcon name="icon-Property-1Default" width="25" height="24" />
              </div>
              <div className={s.containerReviewsAndLocation}>
                <div className={s.containerReviews}>
                  <SvgIcon
                    name="icon-Property-1Default-1"
                    width="16"
                    height="16"
                  />
                  <p>{camper.rating}</p>
                  <p>({camper.reviews.length} Reviews)</p>
                </div>
                <div className={s.containerLocation}>
                  <SvgIcon name="icon-Map" width="16" height="16" />
                  <p>{formatLocation(camper.location)}</p>
                </div>
              </div>
              <p className={s.description}>{camper.description}</p>
              <div className={s.category}></div>
              <button className={s.buttonShowMore}>Show more</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
