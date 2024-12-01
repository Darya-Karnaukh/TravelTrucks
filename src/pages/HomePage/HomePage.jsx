import { useNavigate } from "react-router-dom";
import s from "../HomePage/HomePage.module.css";
import { useDispatch } from "react-redux";
import { getCampers } from "../../redux/campers/operations";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const limit = 4;
  const onClick = () => {
    navigate("/catalog");
    dispatch(getCampers({ page: 1, limit }));
  };

  return (
    <div className={s.homePage}>
      <div className={s.containerHomePage}>
        <h1 className={s.titleHomePage}>Campers of your dreams</h1>
        <p className={s.textHomePage}>
          You can find everything you want in our catalog
        </p>
        <button onClick={onClick} className={s.buttonHomePage}>
          View Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
