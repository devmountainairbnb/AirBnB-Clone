import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = '#333',
  width = "100%",
  className = "",
  viewBox="0 0 37 38"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="Page-1" stroke={stroke} stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dryer">
            <rect id="Rectangle" stroke-width="2" x="1" y="1" width="35" height="36" rx="3"></rect>
            <circle id="Oval" stroke-width="2" cx="18.5" cy="21.5" r="11.5"></circle>
            <circle id="Oval" fill={stroke} cx="6" cy="6" r="2"></circle>
            <circle id="Oval-Copy-2" fill={stroke} cx="12" cy="6" r="2"></circle>
            <path d="M12,19.9261969 L13.0067263,19.4994594 C14.9945366,18.6568539 17.265265,18.8145112 19.1175591,19.9237362 L19.1175591,19.9237362 C20.9696291,21.0328269 23.2403731,21.1894582 25.2271835,20.3451656 L26,20.0167582" id="Path-4" stroke-width="2"></path>
            <path d="M12,23.9261969 L13.0067263,23.4994594 C14.9945366,22.6568539 17.265265,22.8145112 19.1175591,23.9237362 L19.1175591,23.9237362 C20.9696291,25.0328269 23.2403731,25.1894582 25.2271835,24.3451656 L26,24.0167582" id="Path-4-Copy" stroke-width="2"></path>
        </g>
    </g>
  </svg>
);

export default SVG;