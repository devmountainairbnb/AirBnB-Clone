import React from "react";

const SVG = ({
  style = {},
  color = "#333",
  width = "100%",
  className = "",
  viewBox="0 0 41 35"
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
        <g id="Laptop-Friendly-Workspace" stroke={color} strokeWidth="2">
            <rect id="Rectangle" x="1" y="7" width="39" height="27" rx="2"></rect>
            <path d="M14,7 L27,7 L27,2 C27,1.44771525 26.5522847,1 26,1 L15,1 C14.4477153,1 14,1.44771525 14,2 L14,7 Z" id="Rectangle"></path>
            <rect id="Rectangle" x="6" y="7" width="5" height="27"></rect>
            <rect id="Rectangle-Copy-3" x="30" y="7" width="5" height="27"></rect>
        </g>
    </g>
  </svg>
);

export default SVG;