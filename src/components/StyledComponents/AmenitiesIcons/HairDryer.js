import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = '#333',
  width = "100%",
  className = "",
  viewBox="0 0 45 38"
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
        <g id="Hair-Dryer" transform="translate(0.000000, 0.948841)" stroke="#FFFFFF" stroke-width="2">
            <path d="M30,14.4663524 L30,5.64270172 C26.9930811,4.01677996 23.9126965,2.81010904 20.7574644,2.02130101 C17.5470456,1.21869633 14.4233591,0.889706838 11.3839538,1.03235093 C11.2160442,1.0402312 11.0490996,1.06220953 10.8848697,1.09805693 C4.18444929,2.56050082 1,5.52367594 1,10.0511585 C1,14.5851981 4.19400386,17.5507448 10.914564,19.010726 C11.0646862,19.0433387 11.2170673,19.0643669 11.3704214,19.0736277 C14.2743883,19.2491665 17.4030343,18.9196235 20.7574644,18.081016 C24.0448305,17.2591745 27.124953,16.054405 30,14.4663524 Z" id="Rectangle"></path>
            <path d="M22.7023422,17.5644306 C17.5671915,19.1864401 14.9997441,22.2675614 15,26.8077946 L15,32.0511585 C15,33.4003533 15.2059928,34.3890631 14.8511711,34.981593 C14.1540419,36.1457551 12.4639993,36.0511585 11,36.0511585 C8.790861,36.0511585 7,36.0511585 7,32.0511585 L7,17.5644306" id="Rectangle" stroke-linejoin="round"></path>
            <circle id="Oval" cx="12" cy="11.0511585" r="4"></circle>
            <path d="M33.906463,9.4562067 L35.2338943,8.67855999 C36.4896798,7.94288532 38.072943,8.07938383 39.1842842,9.01913658 L39.1842842,9.01913658 C40.2757027,9.94204251 41.8536758,10.0083802 43.0187039,9.18033476 L44.4791273,8.14233667" id="Path-6"></path>
            <path d="M33.906463,13.4562067 L35.2338943,12.67856 C36.4896798,11.9428853 38.072943,12.0793838 39.1842842,13.0191366 L39.1842842,13.0191366 C40.2757027,13.9420425 41.8536758,14.0083802 43.0187039,13.1803348 L44.4791273,12.1423367" id="Path-6-Copy"></path>
            <path d="M33.906463,13.4562067 L35.2338943,12.67856 C36.4896798,11.9428853 38.072943,12.0793838 39.1842842,13.0191366 L39.1842842,13.0191366 C40.2757027,13.9420425 41.8536758,14.0083802 43.0187039,13.1803348 L44.4791273,12.1423367" id="Path-6-Copy-2"></path>
        </g>
    </g>
  </svg>
);

export default SVG;