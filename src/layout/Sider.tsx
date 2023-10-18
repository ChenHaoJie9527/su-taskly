import React from "react";
import Logo from "../components/Logo";
import WeeklyPinned from "../components/WeeklyPinned";

const Sider: React.FC = () => {
  return (
    <ul className="px-[60px] pt-[40px] w-full h-full">
      <li className="mb-[36px]">
        <Logo />
      </li>
      <li>
        <WeeklyPinned />
      </li>
    </ul>
  );
};

export default Sider;
