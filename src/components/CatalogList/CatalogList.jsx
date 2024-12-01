import SvgIcon from "../../hooks/SvgIcon";
import s from "./CatalogList.module.css";
import ParametersCampers from "../ParametersCampers/ParametersCampers.jsx";
import Location from "../Location/Location.jsx";
import { useNavigate } from "react-router-dom";
import LoadMore from "../LoadMore/LoadMore.jsx";
import Loader from "../Loader/Loader.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice.js";

const CatalogList = ({ campers, onLoadMore, hasMore, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const onClick = (id) => {
    navigation(`/catalog/${id}`);
  };
  useEffect(() => {
    if (currentPage > 1) {
      onLoadMore(currentPage);
    }
  }, [currentPage, onLoadMore]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const toggleFavorite = (camperId) => {
    if (favorites.some((item) => item.id === camperId)) {
      dispatch(removeFavorite({ id: camperId }));
    } else {
      const camper = campers.find((camper) => camper.id === camperId);
      dispatch(addFavorite(camper));
    }
  };
  return (
    <div className={s.containerListAndButton}>
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
                  <div
                    className={s.favoriteIcon}
                    onClick={() => toggleFavorite(camper.id)}
                  >
                    <SvgIcon
                      name="icon-Property-1Default"
                      width="25"
                      height="24"
                      className={
                        favorites.some((item) => item.id === camper.id)
                          ? s.favorited
                          : ""
                      }
                    />
                  </div>
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
      {loading ? (
        <Loader />
      ) : (
        hasMore && (
          <LoadMore
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
            loading={loading}
          />
        )
      )}
    </div>
  );
};

export default CatalogList;
