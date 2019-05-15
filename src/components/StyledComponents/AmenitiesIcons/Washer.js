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
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Washer">
            <rect id="Rectangle" stroke="#FFFFFF" stroke-width="2" x="1" y="1" width="35" height="36" rx="3"></rect>
            <circle id="Oval" stroke="#FFFFFF" stroke-width="2" cx="18.5" cy="21.5" r="11.5"></circle>
            <circle id="Oval" fill="#FFFFFF" cx="6" cy="6" r="2"></circle>
            <circle id="Oval-Copy-2" fill="#FFFFFF" cx="12" cy="6" r="2"></circle>
            <path d="M7.12101939,21.5 L8.61932038,20.6916792 C11.8951198,18.9244128 15.9021686,19.2386007 18.8624903,21.4948337 L18.8624903,21.4948337 C21.8222684,23.7506524 25.829272,24.0627266 29.1026185,22.2923572 L30.2160986,21.6901383" id="Path-4" stroke="#FFFFFF" stroke-width="2"></path>
        </g>
    </g>
  </svg>
);

export default SVG;