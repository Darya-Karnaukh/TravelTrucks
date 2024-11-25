import icons from "../../public/icons.svg";

const SvgIcon = ({ name, width = 16, height = 16, className = "" }) => (
  <svg width={width} height={height} className={className} aria-hidden="true">
    <use href={`${icons}#${name}`} />
  </svg>
);

export default SvgIcon;
