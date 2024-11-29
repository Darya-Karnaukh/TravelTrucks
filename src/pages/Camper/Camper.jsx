import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCampers } from "../../redux/campers/selectors.js";
import s from "./Camper.module.css";
import SvgIcon from "../../hooks/SvgIcon.jsx";
import Location from "../../components/Location/Location";
import { useState } from "react";
import FormCamper from "../../components/FormCamper/FormCamper.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";

const Camper = () => {
  const { id } = useParams();
  const campers = useSelector(selectCampers);
  const [activeTab, setActiveTab] = useState("features");

  const camper = campers.find((item) => item.id === id);

  if (!camper) {
    return <p>Camper not found!</p>;
  }

  return (
    <div className={s.wrapper}>
      <h2>{camper.name}</h2>
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
      <p className={s.price}>€{camper.price}.00</p>
      <div className={s.containerImages}>
        {Array.from({ length: 4 }).map((_, index) => {
          const image = camper.gallery[index];
          return (
            <div
              key={index}
              className={s.image}
              style={{
                backgroundImage: `url(${
                  image ? image.thumb : "path-to-placeholder-image.jpg"
                })`,
              }}
              aria-label={image ? camper.name : "Placeholder"}
            ></div>
          );
        })}
      </div>
      <p className={s.description}>{camper.description}</p>
      <div className={s.containerButton}>
        <button
          className={`${s.buttonCamper} ${
            activeTab === "features" ? s.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${s.buttonCamper} ${
            activeTab === "reviews" ? s.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className={s.vector}></div>
      <div className={s.containerFeaturesAndForm}>
        {activeTab === "features" && (
          <div>
            {/* Тут ви можете відобразити компоненти "Features", наприклад */}
          </div>
        )}
        {activeTab === "reviews" && <Reviews reviews={camper.reviews} />}
        <FormCamper />
      </div>
    </div>
  );
};

export default Camper;
