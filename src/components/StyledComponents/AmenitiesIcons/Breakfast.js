import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = '#333',
  width = "100%",
  className = "",
  viewBox="0 0 40 39"
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
    <g stroke={stroke} stroke-width="1" fill={fill} fill-rule="evenodd">
        <g id="breakfast" transform="translate(0.000000, 1.570008)" stroke={stroke} stroke-width="2">
            <path d="M1,16.429992 L1,21.929992 C1,29.9381209 7.49187113,36.429992 15.5,36.429992 C23.5081289,36.429992 30,29.9381209 30,21.929992 L30,16.429992 L1,16.429992 Z" id="Rectangle"></path>
            <path d="M30,16.429992 L30,25.429992 L34.5,25.429992 C36.9852814,25.429992 39,23.4152734 39,20.929992 C39,18.4447107 36.9852814,16.429992 34.5,16.429992 L30,16.429992 Z" id="Rectangle"></path>
            <path d="M15.5,13.1267367 L15.8435389,12.6887611 C17.4022372,10.7015863 17.1810191,7.85211861 15.3342977,6.12932321 L15.2718589,6.07107443 C13.5709739,4.48432897 13.4784455,1.81917791 15.065191,0.118292913 C15.1026707,0.0781171486 15.140933,0.0386786283 15.1799559,-1.15463195e-14 L15.1799559,-1.24344979e-14" id="Path-5"></path>
            <path d="M20.5,13.1267367 L20.7672359,12.8412376 C22.1982447,11.3124322 22.1189649,8.9130287 20.5901595,7.48201988 C20.5081581,7.40526412 20.4227867,7.33218997 20.3342977,7.26301365 L20.2550724,7.20107923 C18.8371152,6.0925903 18.5862415,4.04450101 19.6947305,2.62654376 C19.8381505,2.44308366 20.0008214,2.27552429 20.1799559,2.12673668 L20.1799559,2.12673668" id="Path-5-Copy"></path>
            <path d="M10.5,13.1267367 L10.7672359,12.8412376 C12.1982447,11.3124322 12.1189649,8.9130287 10.5901595,7.48201988 C10.5081581,7.40526412 10.4227867,7.33218997 10.3342977,7.26301365 L10.2550724,7.20107923 C8.83711517,6.0925903 8.58624153,4.04450101 9.69473046,2.62654376 C9.83815051,2.44308366 10.0008214,2.27552429 10.1799559,2.12673668 L10.1799559,2.12673668" id="Path-5-Copy-2"></path>
        </g>
    </g>
  </svg>
);

export default SVG;