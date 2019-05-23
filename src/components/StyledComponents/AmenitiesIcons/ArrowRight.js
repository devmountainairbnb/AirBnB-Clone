import React from "react";

const SVG = ({
  style = {},
  color = "#333",
  width = "100%",
  className = "",
  viewBox="0 0 41 41"
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
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="arrow-right" transform="translate(20.500000, 20.500000) scale(-1, 1) translate(-20.500000, -20.500000) ">
            <circle id="Oval" fill="#D8D8D8" cx="20.5" cy="20.5" r="20.5"></circle>
            <polyline id="Line-29" fill='none' stroke="#484848" stroke-width="2" stroke-linecap="square" transform="translate(19.000000, 21.000000) rotate(90.000000) translate(-19.000000, -21.000000) " points="9 16 19 26 29 16"></polyline>
        </g>
    </g>

  </svg>
);

export default SVG;
