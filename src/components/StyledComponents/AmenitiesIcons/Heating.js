import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = '#333',
  width = "100%",
  className = "",
  viewBox="0 0 20 42"
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
        <g id="Heating" stroke="#FFFFFF" stroke-width="2">
            <path d="M4,7 L4,25.2786147 L3.70004433,25.5726666 C1.98369112,27.2552382 1,29.5482396 1,32 C1,36.9705627 5.02943725,41 10,41 C14.9705627,41 19,36.9705627 19,32 C19,29.5482396 18.0163089,27.2552382 16.2999557,25.5726666 L16,25.2786147 L16,7 C16,3.6862915 13.3137085,1 10,1 C6.6862915,1 4,3.6862915 4,7 Z" id="Combined-Shape"></path>
            <path d="M8,7 L8,27.3794846 L7.50072596,27.668299 C5.96498478,28.5566773 5,30.1937392 5,32 C5,34.7614237 7.23857625,37 10,37 C12.7614237,37 15,34.7614237 15,32 C15,30.1937392 14.0350152,28.5566773 12.499274,27.668299 L12,27.3794846 L12,7 C12,5.8954305 11.1045695,5 10,5 C8.8954305,5 8,5.8954305 8,7 Z" id="Combined-Shape"></path>
        </g>
    </g>
  </svg>
);

export default SVG;