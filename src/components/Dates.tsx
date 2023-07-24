import React, { useContext, useEffect } from "react";
import { Day } from "../utils/types";
import { MonthContext } from "../utils/context/monthContext";
import events from "../utils/events.json";

interface Props {
  weekNumber: number;
  weeks: Day[][];
  setDates: React.Dispatch<React.SetStateAction<Day[]>>;
}

const Dates: React.FC<Props> = ({ weekNumber, weeks, setDates }) => {
  const { selectedMonth } = useContext(MonthContext);

  //getMonth() provides the month number starting from 0, i.e. for January, it will give 0
  const today: Date = new Date();
  const currentMonth: number = today.getMonth();
  const currentDay: number = today.getDate();
  const currentYear: number = today.getFullYear();

  useEffect(() => {
    function getDates() {
      let temp: Day[] = [];

      //totalDays will give the total number of days in a month
      let totalDays: number = new Date(
        currentYear,
        selectedMonth + 1,
        0
      ).getDate();

      //if the month selected by user is same as current month then start month from today
      //else start month from 1
      let startDate: number = selectedMonth === currentMonth ? currentDay : 1;

      for (let i = startDate; i <= totalDays; i++) {
        let date: Day = { day: i };
        temp.push(date);
      }

      setDates(temp);
    }

    getDates();
  }, [selectedMonth, currentDay, currentMonth, currentYear, setDates]);

  function isEvent(day: number) {
    for (let i = 0; i < events.length; i++) {
      if (day === events[i].date && selectedMonth === events[i].month) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="flex bg-white">
      {weeks[weekNumber].map((week) => (
        <div
          className={`w-[15%] text-center py-6 ${
            isEvent(week.day) ? "bg-gray-200 rounded-md font-semibold px-2" : ""
          }`}
          key={week.day}
        >
          {week.day}
        </div>
      ))}
    </div>
  );
};

export default Dates;
