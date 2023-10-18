import React from "react";
import WeeklyPinnedCard from "./WeeklyPinnedCard";
import SuCalendar from "./SuCalendar";
import addWeeklyIcon from "../assets/svg/addWeekly.svg";

const WeeklyPinned: React.FC = () => {
  return (
    <div>
      <header className="flex items-center justify-between mb-[20px]">
        <h1 className="text-[#2C2543] text-[24px] font-normal font-[Gilroy-Regular]">
          Weekly Pinned
        </h1>
        <span className="text-[#F4B860] text[14px] font-bold font-[Gilroy-Bold] cursor-pointer">
          View all
        </span>
      </header>
      <main>
        <ul>
          <li>
            <WeeklyPinnedCard
              title="Call doctor for tests"
              desc="15 Mar 2022 - 9:00 AM"
              context={
                <div className="overflow-hidden">
                  <div className="bg-[#F4B860] my-[8px] w-[78px] h-[20px] rounded-[12px] text-center text-[#fff] text-[12px] font-[Gilroy-Bold]">
                    Personal
                  </div>
                  <p className="text-[#2C2543] text-[14px] font-[Gilroy-Medium] break-words">
                    Ask for blood tests and GYM certificate.
                  </p>
                </div>
              }
            />
          </li>
          <li className="mt-[2vh]">
            <WeeklyPinnedCard
              title="Call doctor for tests"
              desc="15 Mar 2022 - 9:00 AM"
            />
          </li>
          <li className="mt-[2vh]">
            <WeeklyPinnedCard
              title="Add new weekly pin"
              icon={<img src={addWeeklyIcon} />}
            />
          </li>
        </ul>
      </main>

      <footer>
        <SuCalendar />
      </footer>
    </div>
  );
};

export default WeeklyPinned;
