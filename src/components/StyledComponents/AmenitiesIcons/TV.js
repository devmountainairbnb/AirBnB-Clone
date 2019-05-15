import React from "react";

const SVG = ({
  style = {},
  color = "#333",
  width = "100%",
  className = "",
  viewBox="0 0 40 41"
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
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="TV" transform="translate(0.000000, 2.000000)" stroke={color}>
            <path d="M20,9 L26,0" id="Line" strokeWidth="2" strokeLinecap="square"></path>
            <path d="M8,9 L14,0" id="Line-Copy" strokeWidth="2" strokeLinecap="square" transform="translate(11.000000, 4.500000) scale(-1, 1) translate(-11.000000, -4.500000) "></path>
            <circle id="Oval" fill={color} cx="34" cy="15" r="2"></circle>
            <circle id="Oval-Copy" fill={color} cx="34" cy="20" r="2"></circle>
            <rect id="Rectangle" strokeWidth="2" x="1" y="10" width="38" height="28" rx="2"></rect>
            <rect id="Rectangle" strokeWidth="2" x="5" y="14" width="24" height="20" rx="1"></rect>
        </g>
    </g>
  </svg>
);

export default SVG;