import React, { FC } from "react";

interface IArrowIcon {
  classNameSvg?: string;
}

const ArrowIcon: FC<IArrowIcon> = ({ classNameSvg }) => {
  return (
    <svg
      className={`duration-500 transition-all ${classNameSvg}`}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className=" duration-500" 
        d="M7 7.13037L0.5 0.130371H13.5L7 7.13037Z"
        fill="black"
      />
    </svg>
  );
};

export default ArrowIcon;
