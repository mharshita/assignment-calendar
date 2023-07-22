import React, { useState, useEffect } from "react";
import { Day } from "../utils/types";
import { Weekdays } from "../utils/weekdays";
import { dates } from "../utils/dates";
import Header from "./Header";

const Card = () => {
  const [weeks, setWeeks] = useState<Day[][]>([[{ day: 1 }]]);
  const [weekNumber, setWeekNumber] = useState<number>(0);

  useEffect(() => {
    getWeek(dates);
  }, []);

  const getWeek = (dates: Day[]) => {
    let n = 7;
    let temp = [];

    for (let i = 0; i < dates.length; i += n) {
      temp.push(dates.slice(i, i + n));
    }

    setWeeks(temp);
  };

  return (
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
        <div className="date-container">
          {weeks[weekNumber].map((week) => (
            <div key={week.day}>{week.day}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
