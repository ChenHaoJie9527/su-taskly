import React from "react";

interface Props {
  title: string;
  desc?: string;
  context?: React.ReactNode;
  priority?: string;
}

const WeeklyPinnedCard: React.FC<Props> = ({ title, desc, context }) => {
  return (
    <div className="flex bg-[#FFFFFF] min-h-[200px] max-h-[280px] rounded-[20px] box-border items-start">
      <div className="w-[45px] ml-[30px] mt-[30px] h-[45px] rounded-[12px] bg-[#F8D57E] flex items-center text-[26px] justify-center">
        👨🏻
      </div>
      <div className="ml-[30px] mt-[30px] flex-1">
        <h3 className="text-[20px] font-bold text-[#2C2543]">{title}</h3>
        <p className="text-[14px] text-[#2C2543] font-[Gilroy-Medium]">
          {desc}
        </p>
        {context && context}
      </div>
    </div>
  );
};

export default WeeklyPinnedCard;
