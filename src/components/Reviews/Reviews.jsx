import SvgIcon from "../../hooks/SvgIcon";
import s from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  const renderStars = (rating) => {
    const totalStars = 5;

    return (
      <div className={s.starContainer}>
        {Array.from({ length: totalStars }, (_, index) => (
          <span
            key={index}
            className={`${s.star} ${index < rating ? s.filled : ""}`}
          >
            <SvgIcon
              name="icon-Property-1Default-1"
              width="16"
              height="16"
              className={index < rating ? s.filled : s.icon} // використання класів для кольору
            />
          </span>
        ))}
      </div>
    );
  };
  return (
    <ul className={s.wrapper}>
      {reviews.map((review, index) => (
        <li key={index} className={s.containerReviews}>
          <div className={s.person}>
            <div className={s.iconReviews}>
              <p>{review.reviewer_name.charAt(0)}</p>
            </div>
            <div className={s.nameAndRating}>
              <p>{review.reviewer_name}</p>

              {renderStars(review.reviewer_rating)}
            </div>
          </div>
          <p className={s.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
