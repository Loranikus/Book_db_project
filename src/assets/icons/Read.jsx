import React from "react";
export const Read = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      fill="#368a1e"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#368a1e"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.24000000000000005"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="M2,20V4.963a11,11,0,0,1,9,0V20A11,11,0,0,0,2,20ZM13,4.963V20a11,11,0,0,1,9,0V4.963A11,11,0,0,0,13,4.963Z" />
      </g>
    </svg>
  );
};
