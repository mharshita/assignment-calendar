import React from "react";
import { Months } from "../utils/months";
import { Day } from "../utils/types";

interface Props {
  weekNumber: number;
  setWeekNumber: React.Dispatch<React.SetStateAction<number>>;
  weeks: Day[][];
}

const Header: React.FC<Props> = ({ weekNumber, setWeekNumber, weeks }) => {
  const today: Date = new Date();
  const currentMonth: number = today.getMonth();

  return (
    <div className="navigation-container">
      <button
        onClick={() => {
          let num = weekNumber - 1;
          setWeekNumber(num);
        }}
        disabled={weekNumber === 0}
      >
        Prev
      </button>
      {Months[currentMonth]}
      <button
        onClick={() => {
          let num = weekNumber + 1;
          setWeekNumber(num);
        }}
        disabled={weekNumber === weeks.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Header;
