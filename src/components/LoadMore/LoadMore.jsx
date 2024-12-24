import Loader from "../Loader/Loader";
import s from "./LoadMore.module.css";
const LoadMore = ({ onLoadMore, hasMore, loading }) => {
  if (!hasMore) return null;
  const handleClick = (event) => {
    event.preventDefault();
    onLoadMore();
  };
  return (
    <div className={s.loadMoreContainer}>
      {loading ? (
        <Loader />
      ) : (
        <button
          className={s.buttonLoadMore}
          onClick={handleClick}
          type="button"
          disabled={loading}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMore;
