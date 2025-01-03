import ParametersCampers from "../ParametersCampers/ParametersCampers.jsx";
import s from "./Features.module.css";
const Features = ({ camper }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.parameters}>
        <ParametersCampers parameters={camper} />
      </div>
      <div className={s.containerDetails}>
        <h3>Vehicle details</h3>
        <div className={s.vector}></div>
        <ul className={s.detailsCamper}>
          <li className={s.detail}>
            <p>Form</p>
            <p>
              {camper.form
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .replace(/^./, (str) => str.toUpperCase())}{" "}
            </p>
          </li>
          <li className={s.detail}>
            <p>Length</p>
            <p>{camper.length}</p>
          </li>
          <li className={s.detail}>
            <p>Width</p>
            <p>{camper.width}</p>
          </li>
          <li className={s.detail}>
            <p>Height</p>
            <p>{camper.height}</p>
          </li>
          <li className={s.detail}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </li>
          <li className={s.detail}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
