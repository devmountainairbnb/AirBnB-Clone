import React from "react";

const SVG = ({
  style = {},
  color = "#333",
  width = "100%",
  className = "",
  viewBox="0 0 42 43"
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
        <g id="Private-Bathroom" transform="translate(0.000000, -1.961380)" stroke={color} strokeWidth="2">
            <path d="M3,27.96138 L3,29.96138 C3,35.4842275 7.4771525,39.96138 13,39.96138 L29,39.96138 C34.5228475,39.96138 39,35.4842275 39,29.96138 L39,27.96138 L3,27.96138 Z" id="Rectangle"></path>
            <rect id="Rectangle" x="1" y="23.96138" width="40" height="4" rx="2"></rect>
            <path d="M6.5,38.46138 L6.5,43.96138" id="Line-18" strokeLinecap="square"></path>
            <path d="M35.5,38.46138 L35.5,43.96138" id="Line-19" strokeLinecap="square"></path>
            <path d="M3.5,22.96138 L3.5,5.3521157 C3.5,4.05307807 4.55307807,3 5.8521157,3 C6.7677211,3 7.60011747,3.53132705 7.98560555,4.36182822 L7.98560555,4.36182822" id="Line-25" strokeLinecap="square"></path>
            <path d="M6.01040764,9.47178762 L14.0104076,9.47178762 L14.0104076,8.47178762 C14.0104076,6.26264862 12.2195466,4.47178762 10.0104076,4.47178762 C7.80126864,4.47178762 6.01040764,6.26264862 6.01040764,8.47178762 L6.01040764,9.47178762 Z" id="Rectangle" transform="translate(10.010408, 6.971788) rotate(-45.000000) translate(-10.010408, -6.971788) "></path>
        </g>
    </g>
  </svg>
);

export default SVG;