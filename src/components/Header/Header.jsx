import { NavLink } from "react-router-dom";
import SvgIcon from "../../hooks/SvgIcon.jsx";
import s from "../Header/Header.module.css";
import { useDispatch } from "react-redux";
import { getCampers } from "../../redux/campers/operations.js";

const Header = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(getCampers());
  };
  return (
    <header className={s.header}>
      <NavLink to="/">
        <SvgIcon name="icon-Logo" width="136" height="16" />
      </NavLink>
      <nav className={s.navigationHeader}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${s.navigationLink} ${s.activeLink}` : s.navigationLink
          }
        >
          Home
        </NavLink>
        <NavLink
          onClick={onClick}
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${s.navigationLink} ${s.activeLink}` : s.navigationLink
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
