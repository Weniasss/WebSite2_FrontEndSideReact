import React from "react";
import Title from "../../atoms/Title";
import StatsSectionText from "../../atoms/Stats/StatsSectionText";
import StatsGroupItems from "./StatsGroupItems";

const StatsSection = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="pb-10">
        <div className="mx-auto h-96 bg-zinc-300   rounded-xl">
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <Title text="By the numbers" />

              <StatsSectionText />
            </div>
          </div>
        </div>

        <StatsGroupItems />
      </div>
    </div>
  );
};

export default StatsSection;
