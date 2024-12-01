import SvgIcon from "../../hooks/SvgIcon";
import s from "./VehicleType.module.css";
const VehicleType = ({ selectedType, onTypeChange }) => {
  const handleTypeClick = (type) => {
    onTypeChange(type);
  };
  return (
    <div className={s.container}>
      <div
        className={`${s.vehicleType} ${
          selectedType === "panelTruck" ? s.active : ""
        }`}
        onClick={() => handleTypeClick("panelTruck")}
      >
        <div className={s.type}>
          <SvgIcon name="icon-bi_grid-1x2" width="32" height="32" />
          <p>Van</p>
        </div>
      </div>

      <div
        className={`${s.vehicleType} ${
          selectedType === "fullyIntegrated" ? s.active : ""
        }`}
        onClick={() => handleTypeClick("fullyIntegrated")}
      >
        <div className={s.type}>
          <SvgIcon name="icon-bi_grid" width="32" height="32" />
          <p>Fully Integrated</p>
        </div>
      </div>

      <div
        className={`${s.vehicleType} ${
          selectedType === "alcove" ? s.active : ""
        }`}
        onClick={() => handleTypeClick("alcove")}
      >
        <div className={s.type}>
          <SvgIcon name="icon-bi_grid-3x3-gap" width="32" height="32" />
          <p>Alcove</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleType;
