import React from "react";
import tasklySvg from "../assets/svg/taskly.svg";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src={tasklySvg} alt="" />
      <span className="text-[#000] ml-3 text-[20px] font-bold font-[Gilroy-Bold]">
        Taskly
      </span>
    </div>
  );
};

export default Logo;
