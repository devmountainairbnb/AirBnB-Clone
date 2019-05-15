import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = '#333',
  width = "100%",
  className = "",
  viewBox="0 0 42 34"
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
        <g id="WIFI" transform="translate(1.000000, 1.180878)" stroke="#FFFFFF" stroke-width="2">
            <circle id="Oval" cx="20" cy="27.8191219" r="4"></circle>
            <path d="M11,19.626619 C13.6666667,17.208873 16.6666667,16 20,16 C23.3333333,16 26.3333333,17.208873 29,19.626619" id="Path"></path>
            <path d="M6,13.626619 C10.6252041,9.87553968 15.2918708,8 20,8 C24.7081292,8 29.3747959,9.87553968 34,13.626619" id="Path-Copy"></path>
            <path d="M1.0658141e-14,7.62661903 C5.29450698,2.54220634 11.9611736,-6.21724894e-15 20,-6.21724894e-15 C28.0388264,-6.21283891e-15 34.705493,2.54220634 40,7.62661903" id="Path-Copy-2"></path>
        </g>
    </g>
  </svg>
);

export default SVG;