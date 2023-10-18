import React from "react";

interface Props {
  title: string;
  desc?: string;
  context?: React.ReactNode;
  priority?: string;
  icon?: React.ReactNode;
}

const WeeklyPinnedCard: React.FC<Props> = ({ title, desc, context, icon }) => {
  return (
    <div className="flex bg-[#FFFFFF] items-center p-[20px] max-h-[280px] rounded-[20px] box-border items-start">
      <div className="w-[45px] ml-[20px] h-[45px] rounded-[12px] bg-[#F8D57E] flex items-center text-[26px] justify-center">
        {icon ? icon : "👨🏻"}
      </div>
      <div className="ml-[30px] flex-1">
        <h3 className="text-[20px] font-bold text-[#2C2543]">{title}</h3>
        {desc && (
          <p className="text-[14px] text-[#2C2543] font-[Gilroy-Medium]">
            {desc}
          </p>
        )}
        {context && context}
      </div>
    </div>
  );
};

export default WeeklyPinnedCard;
