import React, { useState, useEffect, useContext } from "react";
import { MonthContext } from "../utils/context/monthContext";

const Weekdays = () => {
  const [weekdays, setWeekdays] = useState<String[]>([]);

  const { selectedMonth } = useContext(MonthContext);

  function getWeekDayName(date: number, month: number, year: number): String {
    const formattedDate = new Date(year, month, date).toLocaleString("en-US", {
      weekday: "short",
    });
    return formattedDate;
  }

  useEffect(() => {
    function getNextWeekDays() {
      const today: Date = new Date();
      const nextSevenWeekDays: String[] = [];

      for (let i = 0; i < 7; i++) {
        const nextDate: Date = new Date(today);
        nextDate.setDate(today.getDate() + i);

        //getMonth() provides the month number starting from 0, i.e. for January, it will give 0
        const date: number = nextDate.getDate();
        const month: number = nextDate.getMonth();
        const year: number = nextDate.getFullYear();

        //if the selectedMonth is same as the current month, then the start date of month will be
        //today's date, else the start date will be 1
        if (selectedMonth === month) {
          nextSevenWeekDays.push(getWeekDayName(date, month, year));
        } else {
          nextSevenWeekDays.push(getWeekDayName(1 + i, selectedMonth, year));
        }
      }

      setWeekdays(nextSevenWeekDays);
    }

    getNextWeekDays();
  }, [selectedMonth]);

  return (
    <div className="flex justify-between bg-white">
      {weekdays.map((day, index) => (
        <div key={index} className="py-6 w-[15%] text-center font-semibold">
          {day}
        </div>
      ))}
    </div>
  );
};

export default Weekdays;
