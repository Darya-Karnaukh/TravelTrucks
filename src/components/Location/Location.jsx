import SvgIcon from "../../hooks/SvgIcon";
import s from "./Location.module.css";

const formatLocation = (location) => {
  const parts = location.split(", ");
  if (parts.length !== 2) {
    return location;
  }
  const [country, city] = parts;
  return `${city}, ${country}`;
};

const Location = ({ location }) => {
  return (
    <div className={s.containerLocation}>
      <SvgIcon name="icon-Map" width="16" height="16" />
      <p>{formatLocation(location)}</p>
    </div>
  );
};

export default Location;
