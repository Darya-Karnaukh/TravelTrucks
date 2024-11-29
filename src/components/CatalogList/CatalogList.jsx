import SvgIcon from "../../hooks/SvgIcon";
import s from "./CatalogList.module.css";
import ParametersCampers from "../ParametersCampers/ParametersCampers.jsx";
import Location from "../Location/Location.jsx";
import { useNavigate } from "react-router-dom";

const CatalogList = ({ campers }) => {
  const navigation = useNavigate();
  const onClick = (id) => {
    navigation(`/catalog/${id}`);
  };
  return (
    <ul className={s.wrapper}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <div
            className={s.images}
            style={{
              backgroundImage: `url(${camper.gallery[0]?.thumb})`,
            }}
            aria-label={camper.name}
          ></div>
          <div className={s.containerTextContent}>
            <div className={s.containerTitleAndPrice}>
              <h2>{camper.name}</h2>
              <div className={s.iconPrice}>
                <p>€{camper.price}.00</p>
                <SvgIcon name="icon-Property-1Default" width="25" height="24" />
              </div>
            </div>
            <div className={s.containerReviewsAndLocation}>
              <div className={s.containerReviews}>
                <SvgIcon
                  name="icon-Property-1Default-1"
                  width="16"
                  height="16"
                  className={s.icon}
                />
                <p>{camper.rating}</p>
                <p>({camper.reviews.length} Reviews)</p>
              </div>
              <Location location={camper.location} />
            </div>
            <p className={s.description}>{camper.description}</p>

            <ParametersCampers parameters={camper} />

            <button
              onClick={() => onClick(camper.id)}
              className={s.buttonShowMore}
            >
              Show more
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
