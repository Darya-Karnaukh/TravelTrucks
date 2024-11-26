import SvgIcon from "../../hooks/SvgIcon.jsx";
import s from "./ParametersCampers.module.css";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const ParametersCampers = ({ parameters }) => {
  const arrParameters = [
    { name: "TV", icon: "icon-tv", key: "TV" },
    { name: "AC", icon: "icon-wind-1", key: "AC" },
    {
      name: "Transmission",
      icon: "icon-diagram",
      key: "transmission",
      dynamic: true,
    },
    { name: "Kitchen", icon: "icon-Group", key: "kitchen" },
    { name: "Bathroom", icon: "icon-ph_shower", key: "bathroom" },
    {
      name: "Refrigerator",
      icon: "icon-solar_fridge-outline",
      key: "refrigerator",
    },
    { name: "Microwave", icon: "icon-lucide_microwave", key: "microwave" },
    { name: "Engine", icon: "icon-Group-1", key: "engine", dynamic: true },
    { name: "Water", icon: "icon-ion_water-outline", key: "water" },
    { name: "Radio", icon: "icon-ui-radios", key: "radio" },
    { name: "Gas", icon: "icon-hugeicons_gas-stove", key: "gas" },
  ];

  const renderCategory = (arrParameters) => {
    const value = parameters[arrParameters.key];

    if (value || (arrParameters.dynamic && value !== undefined)) {
      return (
        <div className={s.category} key={arrParameters.key}>
          <SvgIcon name={arrParameters.icon} width="20" height="20" />
          <p>
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
    <div className={s.wrapperCategories}>
      {arrParameters.map(renderCategory)}
    </div>
  );
};

export default ParametersCampers;
