import React from "react";

const Checkmark = ({ fill, style, size }) => {
  return (
    <svg
      width={size}
      height={size}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill={fill}
        d="M6.24,13.14a.52.52,0,0,0,.73,0l8.17-8.06a.36.36,0,0,0,0-.51L13.38,2.81a.36.36,0,0,0-.51,0L6.65,9,3.16,5.58a.36.36,0,0,0-.51,0L.9,7.34a.35.35,0,0,0,0,.5Z"
      />
    </svg>
  );
};

export default Checkmark;
