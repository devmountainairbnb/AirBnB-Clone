import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = '#333',
  width = "100%",
  className = "",
  viewBox="0 0 39 38"
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
        <g id="Iron" transform="translate(0.000000, 1.000000)" stroke="#FFFFFF" stroke-width="2">
            <path d="M1,6 L1,20 L37.9671954,20 C37.4526094,12.1819682 30.9482427,6 23,6 L1,6 Z" id="Rectangle"></path>
            <path d="M12,0.5 L26,0.5" id="Line-7" stroke-linecap="square"></path>
            <path d="M25.5,1.5 L25.5,6" id="Line-8" stroke-linecap="square"></path>
            <path d="M15.8033009,32.6576167 L17.4329752,31.6971281 C18.9768841,30.7871874 20.9278452,30.9557216 22.292836,32.1169482 L22.292836,32.1169482 C23.6331282,33.2571631 25.5773911,33.3390207 27.0087812,32.3154995 L28.8033009,31.0323209" id="Path-6-Copy-2" transform="translate(22.303301, 32.032321) rotate(45.000000) translate(-22.303301, -32.032321) "></path>
            <path d="M8.02328597,31.8150999 L9.35071722,31.0374532 C10.6065028,30.3017785 12.1897659,30.438277 13.3011072,31.3780298 L13.3011072,31.3780298 C14.3925257,32.3009357 15.9704988,32.3672734 17.1355268,31.539228 L18.5959503,30.5012299" id="Path-6-Copy-4" transform="translate(13.309618, 31.309618) rotate(45.000000) translate(-13.309618, -31.309618) "></path>
            <path d="M25.023286,31.8150999 L26.3507172,31.0374532 C27.6065028,30.3017785 29.1897659,30.438277 30.3011072,31.3780298 L30.3011072,31.3780298 C31.3925257,32.3009357 32.9704988,32.3672734 34.1355268,31.539228 L35.5959503,30.5012299" id="Path-6-Copy-3" transform="translate(30.309618, 31.309618) rotate(45.000000) translate(-30.309618, -31.309618) "></path>
            <path d="M1,24.5 L38,24.5" id="Line-9" stroke-linecap="square"></path>
        </g>
    </g>
  </svg>
);

export default SVG;