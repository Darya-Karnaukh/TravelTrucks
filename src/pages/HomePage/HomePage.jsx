import s from "../HomePage/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div className={s.containerHomePage}>
        <h1 className={s.titleHomePage}>Campers of your dreams</h1>
        <p className={s.textHomePage}>
          You can find everything you want in our catalog
        </p>
        <button className={s.buttonHomePage}>View Now</button>
      </div>
    </div>
  );
};

export default HomePage;
