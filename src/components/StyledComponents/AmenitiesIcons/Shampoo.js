import React from "react";

const SVG = ({
  style = {},
  color = "#333",
  width = "100%",
  className = "",
  viewBox="0 0 21 42" 
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
    <g id="Page-1" stroke='none' strokeWidth="1" fill='none' fillRule="evenodd">
        <g id="Shampoo" transform="translate(-0.000000, 0.000000)" stroke={color} strokeWidth="2">
            <path d="M2.97972102,11.3617482 C1.79158733,11.7914382 1.00000658,12.9194709 1.00000658,14.1829169 L1,38 C1,39.6568542 2.34314575,41 4,41 L17,41 C18.6568542,41 20,39.6568542 20,38 L20,14.1829199 C20,12.9194661 19.2084144,11.7914301 18.0202698,11.3617449 C15.5075405,10.4530144 13.0022817,10 10.5,10 C7.99771525,10 5.49245339,10.4530155 2.97972102,11.3617482 Z" id="Rectangle"></path>
            <rect id="Rectangle" x="8" y="6" width="5" height="4" rx="1"></rect>
            <path d="M10.5,5 L10.5,2" id="Line-13" strokeLinecap="square"></path>
            <path d="M8.5,1 L19,1" id="Line-14" strokeLinecap="square"></path>
            <path d="M1,17.5 L20,17.5" id="Line-15" strokeLinecap="square"></path>
            <path d="M1,32.5 L20,32.5" id="Line-15-Copy" strokeLinecap="square"></path>
        </g>
    </g>
  </svg>
);

export default SVG;