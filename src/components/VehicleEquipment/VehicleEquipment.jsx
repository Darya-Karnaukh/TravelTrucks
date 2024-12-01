import { arrParameters } from "../../config/parameters";
import SvgIcon from "../../hooks/SvgIcon";
import s from "./VehicleEquipment.module.css";

const VehicleEquipment = ({
  parameters,
  onFilterChange,
  handleDynamicChange,
}) => {
  const isActive = (key) => !!parameters[key];
  return (
    <div className={s.container}>
      {arrParameters.map((param) => {
        if (param.dynamic) {
          return (
            <label
              className={`${s.input} ${isActive(param.key) ? s.active : ""}`}
              key={param.key}
            >
              <div className={s.type}>
                <SvgIcon
                  className={s.icon}
                  name={param.icon}
                  width="32"
                  height="32"
                />

                <select
                  className={s.select}
                  value={parameters[param.key] || ""}
                  onChange={(e) =>
                    handleDynamicChange(param.key, e.target.value)
                  }
                >
                  {param.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          );
        }

        return (
          <label
            className={`${s.input} ${isActive(param.key) ? s.active : ""}`}
            key={param.key}
          >
            <div className={s.type}>
              <SvgIcon
                className={s.icon}
                name={param.icon}
                width="32"
                height="32"
              />
              {param.name}
            </div>

            <input
              type="checkbox"
              style={{ display: "none" }}
              checked={parameters[param.key]}
              onChange={(e) => onFilterChange(param.key, e.target.checked)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default VehicleEquipment;
