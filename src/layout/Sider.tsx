import React from "react";
import Logo from "../components/Logo";
import WeeklyPinned from "../components/WeeklyPinned";

const Sider: React.FC = () => {
  return (
    <ul className="p-[60px] w-full h-full">
      <li className="mb-[76px]">
        <Logo />
      </li>
      <li>
        <WeeklyPinned />
      </li>
    </ul>
  );
};

export default Sider;
