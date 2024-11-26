import { useDispatch } from "react-redux";
import s from "./ButtonSearch.module.css";
import { getCampers } from "../../redux/campers/operations";
const ButtonSearch = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(getCampers());
  };
  return (
    <div>
      <button onClick={onClick} className={s.buttonSearch}>
        Search
      </button>
    </div>
  );
};

export default ButtonSearch;
