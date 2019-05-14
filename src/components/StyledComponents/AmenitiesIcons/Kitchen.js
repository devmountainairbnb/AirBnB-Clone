import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = '#333',
  width = "100%",
  className = "",
  viewBox="0 0 30 41"
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
        <g id="Kitchen" transform="translate(1.000000, 1.000000)" stroke="#FFFFFF" stroke-width="2">
            <path d="M9,0 L9,10.8333333 C9,12.0299503 8.26737505,13 7.36363636,13 L1.63636364,13 C0.732624955,13 0,12.0299503 0,10.8333333 L0,0" id="Rectangle"></path>
            <rect id="Rectangle" x="2" y="24" width="5" height="15" rx="2"></rect>
            <rect id="Rectangle-Copy" x="23" y="24" width="5" height="15" rx="2"></rect>
            <path d="M4.5,23.5 L4.5,1" id="Line-2" stroke-linecap="square"></path>
            <path d="M26.4853797,23.5 L26.4853797,1.50092982 C26.4853797,0.948645067 26.0376645,0.500929817 25.4853797,0.500929817 C25.4061319,0.500929817 25.327165,0.510350025 25.2501411,0.528992173 L23.5145556,0.949056939 C21.7714569,1.37094015 20.5437315,2.9312602 20.5437315,4.72468671 L20.5437315,15.108549 C20.5437315,17.317688 22.3345925,19.108549 24.5437315,19.108549 C24.8624877,19.108549 25.1812438,19.108549 25.5,19.108549" id="Path-2"></path>
        </g>
    </g>
  </svg>
);

export default SVG;