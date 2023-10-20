import React, { useMemo, useState } from "react";
import { chunk, slice } from "lodash";
import { Button } from "antd";
import prev from "../assets/svg/prev.svg";
import next from "../assets/svg/next.svg";

const weeksMap: any = {
  0: "One weeks",
  1: "Two weeks",
  2: "Three weeks",
  3: "Four weeks",
  4: "Five weeks",
};
const daysMap = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weeksId: any = {
  0: 7,
  1: 14,
  2: 21,
  3: 28,
};

const SuCalendar = () => {
  const [weeks, setWeeks] = useState(0);
  const [weekList] = useState([
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
  ]);
  const weekListMemo = useMemo(() => {
    if (weeks === 0) {
      return weekList[0];
    }
    if (weeks === 1) {
      return [...weekList[0], ...weekList[1]];
    }
    if (weeks === 2) {
      return [...weekList[0], ...weekList[1], ...weekList[2]];
    }
    if (weeks === 3) {
      return [...weekList[0], ...weekList[1], ...weekList[2], ...weekList[3]];
    }
    // return weekList[weeks];
  }, [weeks, weekList]);
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
                if (weeks === 0) return;
                setWeeks(Number(weeks) - 1);
              }}
            />
            <img
              src={next}
              className="ml-[4px] cursor-pointer"
              alt=""
              onClick={() => {
                if (weeks === 3) return;
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
        <div className="bg-[#fff] rounded-[20px] grid grid-cols-7 gap-2 p-[20px]">
          {daysMap.map((item) => {
            return (
              <span
                key={item}
                className="text-[#F4B860] text-[12px] font-[Gilroy-Bold] text-center"
              >
                {item}
              </span>
            );
          })}
          {weekListMemo.map((item, index) => {
            return (
              <span
                key={index}
                className="text-center text-[#2C2543] text-[12px] mt-4 hover:bg-[#F4B860]"
              >
                {item}
              </span>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default SuCalendar;
