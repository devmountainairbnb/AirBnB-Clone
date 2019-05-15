import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = '#333',
  width = "100%",
  className = "",
  viewBox="0 0 41 32"
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
        <g id="Crib">
            <rect id="Rectangle" stroke-width="2" x="1" y="1" width="39" height="4" rx="1"></rect>
            <path d="M2.5,5.5 L2.5,31" id="Line-16" stroke-width="2" stroke-linecap="square"></path>
            <path d="M38.5,5.5 L38.5,31" id="Line-17" stroke-width="2" stroke-linecap="square"></path>
            <path d="M8.5,5.5 L8.5,23.5" id="Line-20" stroke-width="2" stroke-linecap="square"></path>
            <path d="M14.5,5.5 L14.5,23.5" id="Line-21" stroke-width="2" stroke-linecap="square"></path>
            <path d="M20.5,5.5 L20.5,23.5" id="Line-22" stroke-width="2" stroke-linecap="square"></path>
            <path d="M26.5,5.5 L26.5,23.5" id="Line-23" stroke-width="2" stroke-linecap="square"></path>
            <path d="M32.5,5.5 L32.5,23.5" id="Line-24" stroke-width="2" stroke-linecap="square"></path>
            <rect id="Rectangle" fill={stroke} x="3" y="20" width="36" height="5"></rect>
        </g>
    </g>
  </svg>
);

export default SVG;