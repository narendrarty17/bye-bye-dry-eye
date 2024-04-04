import React from "react";
import processList from "@/public/data/homepage/processList.json";
import CentralHeading from "../utils/CentralHeading";

export const Process = () => {
  return (
    <div>
      <CentralHeading>How it works</CentralHeading>
      <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between">
        {processList.map((listItem) => (
          <div
            key={listItem.id}
            className="w-[320px] h-[250px] flex flex-col items-center text-center gap-2"
          >
            <div className="h-[80px] flex justify-center items-center">
              <img className={`w-16 object-contain`} src={listItem.imgSrc} />
            </div>
            <h3 className="font-bold text-lg text-dark-gray">{listItem.title}</h3>
            <p className="text-sm text-medium-gray leading-relaxed">{listItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
