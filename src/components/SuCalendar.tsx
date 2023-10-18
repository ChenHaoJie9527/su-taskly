import React, { useState } from "react";
import { Button } from "antd";
import prev from "../assets/svg/prev.svg";
import next from "../assets/svg/next.svg";

const weeksMap: any = {
  1: "One weeks",
  2: "Two weeks",
  3: "Three weeks",
  4: "Four weeks",
  5: "Five weeks",
};
const SuCalendar = () => {
  const [weeks, setWeeks] = useState(1);

  return (
    <div className="mt-[2vh]">
      <header>
        <div className="flex justify-between">
          <span className="text-[#2C2543] font-[Gilroy-Regular] text-[20px] font-normal">
            March, 2022
          </span>
          <div className="flex flex-1 justify-center">
            <img
              src={prev}
              className="mr-[4px] cursor-pointer hover:text-[#F4B860]"
              alt=""
              onClick={() => {
                if (weeks === 1) return;
                setWeeks(Number(weeks) - 1);
              }}
            />
            <img
              src={next}
              className="ml-[4px] cursor-pointer"
              alt=""
              onClick={() => {
                if (weeks === 5) return;
                setWeeks(Number(weeks) + 1);
              }}
            />
          </div>
          <Button
            type="link"
            className="text-[#F4B860] font-[Gilroy-Bold] text-[14px] hover:!text-[#F4B860]"
          >
            {weeksMap[weeks]}
          </Button>
        </div>
      </header>
      <main className="mt-[1vh]">
        <div className="bg-[#fff] rounded-[20px]">1123</div>
      </main>
    </div>
  );
};

export default SuCalendar;
