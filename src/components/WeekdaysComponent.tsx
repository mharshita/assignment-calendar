import React from "react";
import { Weekdays } from "../utils/weekdays";

const WeekdaysComponent = () => {
  return (
    <div className="flex justify-between bg-white">
      {Weekdays.map((day, index) => (
        <div key={index} className="py-6 w-[15%] text-center font-semibold">
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekdaysComponent;
