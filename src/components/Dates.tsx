import React, { useContext, useEffect } from "react";
import { Day } from "../utils/types";
import { MonthContext } from "../utils/context/monthContext";

interface Props {
  weekNumber: number;
  weeks: Day[][];
  setDates: React.Dispatch<React.SetStateAction<Day[]>>;
}

const Dates: React.FC<Props> = ({ weekNumber, weeks, setDates }) => {
  const { selectedMonth } = useContext(MonthContext);

  const today: Date = new Date();
  const currentMonth: number = today.getMonth();
  const currentDay: number = today.getDate();
  const currentYear: number = today.getFullYear();

  useEffect(() => {
    getDates();
  }, [selectedMonth]);

  function getDates() {
    let temp: Day[] = [];

    let totalDays: number = new Date(
      currentYear,
      selectedMonth + 1,
      0
    ).getDate();

    let startDate: number = selectedMonth === currentMonth ? currentDay : 1;

    for (let i = startDate; i <= totalDays; i++) {
      let date: Day = { day: i };
      temp.push(date);
    }

    setDates(temp);
  }

  return (
    <div className="date-container">
      {weeks[weekNumber].map((week) => (
        <div key={week.day}>{week.day}</div>
      ))}
    </div>
  );
};

export default Dates;
