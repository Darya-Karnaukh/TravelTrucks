import { useNavigate } from "react-router-dom";
import s from "../HomePage/HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/catalog");
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
