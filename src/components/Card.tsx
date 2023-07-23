import React, { useState, useEffect } from "react";
import { Day } from "../utils/types";
import { Weekdays } from "../utils/weekdays";
import Header from "./Header";
import MonthProvider from "../utils/context/monthContext";
import Dates from "./Dates";

const Card = () => {
  const [weeks, setWeeks] = useState<Day[][]>([[{ day: 1 }]]);
  const [weekNumber, setWeekNumber] = useState<number>(0);
  const [dates, setDates] = useState<Day[]>([{ day: 1 }]);

  useEffect(() => {
    getWeek(dates);
  }, [dates]);

  const getWeek = (dates: Day[]) => {
    let n = 7;
    let temp = [];

    for (let i = 0; i < dates.length; i += n) {
      temp.push(dates.slice(i, i + n));
    }

    setWeeks(temp);
  };

  return (
    <MonthProvider>
      <div>
        <div>
          <Header
            weekNumber={weekNumber}
            setWeekNumber={setWeekNumber}
            weeks={weeks}
          />
          <div className="weekday-container">
            {Weekdays.map((day, index) => (
              <div key={index} className="weekday">
                {day}
              </div>
            ))}
          </div>
          <Dates weekNumber={weekNumber} weeks={weeks} setDates={setDates} />
        </div>
      </div>
    </MonthProvider>
  );
};

export default Card;
