import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = '#333',
  width = "100%",
  className = "",
  viewBox="0 0 37 41"
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
    <g id="Page-1" stroke={stroke} stroke-width="1" fill={fill} fill-rule="evenodd" stroke-linecap="square">
      <g id="air_conditioning" transform="translate(0.500000, 1.000000)" stroke={stroke} stroke-width="2">
            <path d="M18,0.5 L18,39" id="Line-5"></path>
            <polyline fill='none'id="Line-6" points="13 4 18 9 23.2344743 4"></polyline>
            <polyline fill='none' id="Line-6-Copy" transform="translate(18.117237, 33.500000) scale(1, -1) translate(-18.117237, -33.500000) " points="13 31 18 36 23.2344743 31"></polyline>
            <path d="M18.25,1.0669873 L18.25,39.5669873" id="Line-5" transform="translate(18.250000, 20.066987) rotate(60.000000) translate(-18.250000, -20.066987) "></path>
            <polyline fill='none' id="Line-6" transform="translate(29.566949, 13.668518) rotate(60.000000) translate(-29.566949, -13.668518) " points="24.4497117 11.1685176 29.4497117 16.1685176 34.6841859 11.1685176"></polyline>
            <polyline fill='none' id="Line-6-Copy" transform="translate(6.184263, 27.168518) scale(1, -1) rotate(-60.000000) translate(-6.184263, -27.168518) " points="1.06702578 24.6685176 6.06702578 29.6685176 11.3015 24.6685176"></polyline>
            <path d="M17.75,1.0669873 L17.75,39.5669873" id="Line-5" transform="translate(17.750000, 20.066987) scale(-1, 1) rotate(60.000000) translate(-17.750000, -20.066987) "></path>
            <polyline fill='none' id="Line-6" transform="translate(6.433051, 13.668518) scale(-1, 1) rotate(60.000000) translate(-6.433051, -13.668518) " points="1.31581405 11.1685176 6.31581405 16.1685176 11.5502883 11.1685176"></polyline>
            <polyline fill='none' id="Line-6-Copy" transform="translate(29.815737, 27.168518) scale(-1, -1) rotate(-60.000000) translate(-29.815737, -27.168518) " points="24.6985 24.6685176 29.6985 29.6685176 34.9329742 24.6685176"></polyline>
        </g>
</g>

  </svg>
);

export default SVG;
