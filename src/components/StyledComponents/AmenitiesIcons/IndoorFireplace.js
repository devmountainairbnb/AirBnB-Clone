import React from "react";

const SVG = ({
  style = {},
  color = "#333",
  width = "100%",
  className = "",
  viewBox="0 0 42 37" 
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
        <g id="Indoor-Fireplace" transform="translate(1.000000, 0.000000)" stroke={color} strokeWidth="2">
            <rect id="Rectangle" x="1" y="1" width="38" height="4" rx="1"></rect>
            <rect id="Rectangle" x="3" y="6" width="4" height="28"></rect>
            <rect id="Rectangle-Copy-2" x="33" y="6" width="4" height="28"></rect>
            <path d="M0,35 L40,35.1808781" id="Line-3" strokeLinecap="square"></path>
            <path d="M20,31.2543534 C16.2906202,31.2543534 13.7033394,27.8578272 13.3121835,25.811313 C12.5108284,21.6186503 13.3121835,18.0850165 16.4611634,14.9609333 C16.4611634,17.2726442 17.5728501,20 20,20 C19.8367709,15.9097768 20.0462895,13.2115205 23.6983768,10.8347092 C24.1865379,14.2210383 24.2277146,15.7288823 26.5181189,20 C27.2836956,21.4276379 27.2836956,25.3955305 26.5181189,26.882461 C25.7525423,28.3693915 23.7093798,31.2543534 20,31.2543534 Z" id="Path-3"></path>
            <path d="M7,28.5 L13.5,28.5" id="Line-4" strokeLinecap="square"></path>
            <path d="M26,28.5 L32.5,28.5" id="Line-4-Copy" strokeLinecap="square"></path>
        </g>
    </g>
  </svg>
);

export default SVG;