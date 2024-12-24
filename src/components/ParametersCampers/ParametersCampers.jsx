import { arrParameters } from "../../config/parameters.js";
import SvgIcon from "../../hooks/SvgIcon.jsx";
import s from "./ParametersCampers.module.css";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const ParametersCampers = ({ parameters }) => {
  const renderCategory = (arrParameters) => {
    const value = parameters[arrParameters.key];

    if (value || (arrParameters.dynamic && value !== undefined)) {
      return (
        <div className={s.category} key={arrParameters.key}>
          <SvgIcon name={arrParameters.icon} width="20" height="20" />
          <p className={s.name}>
            {arrParameters.dynamic
              ? capitalizeFirstLetter(value)
              : arrParameters.name}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ul className={s.wrapperCategories}>{arrParameters.map(renderCategory)}</ul>
  );
};

export default ParametersCampers;
