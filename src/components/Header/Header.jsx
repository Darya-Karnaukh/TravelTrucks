import { NavLink } from "react-router-dom";
import SvgIcon from "../../hooks/SvgIcon.jsx";
import s from "../Header/Header.module.css";

const Header = () => {
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
