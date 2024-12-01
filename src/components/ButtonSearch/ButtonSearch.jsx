import s from "./ButtonSearch.module.css";

const ButtonSearch = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={s.buttonSearch}>
        Search
      </button>
    </div>
  );
};

export default ButtonSearch;
