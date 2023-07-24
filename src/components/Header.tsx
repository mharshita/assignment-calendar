import React, { useContext } from "react";
import { Months } from "../utils/months";
import { Day } from "../utils/types";
import { MonthContext } from "../utils/context/monthContext";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Props {
  weekNumber: number;
  setWeekNumber: React.Dispatch<React.SetStateAction<number>>;
  weeks: Day[][];
}

const Header: React.FC<Props> = ({ weekNumber, setWeekNumber, weeks }) => {
  const { selectedMonth, setSelectedMonth } = useContext(MonthContext);

  //getMonth() provides the month number starting from 0, i.e. for January, it will give 0
  const today: Date = new Date();
  const currentMonth: number = today.getMonth();
  const currentDay: number = today.getDate();
  const currentYear: number = today.getFullYear();

  const handlePrev = () => {
    if (weekNumber === 0) {
      setSelectedMonth(selectedMonth - 1);

      //if the previous month is the current month (July), then there is need to calculate the
      //number of weeks in that month since the month starts from today's date
      //else, the week number to skip to on clicking previous button will be 4 as all other months
      //will have 5 weeks (0 to 4)
      if (selectedMonth === currentMonth + 1) {
        let totalDays: number = new Date(
          currentYear,
          currentMonth + 1,
          0
        ).getDate();

        //totalDaysLeft is the total days that are remaining in the month, i.e. days from current
        //date to the last day of month
        let totalDaysLeft: number = totalDays - currentDay + 1;
        let totalWeeks: number = Math.floor(totalDaysLeft / 7);
        let rem: number = totalDaysLeft % 7;

        if (rem === 0) {
          setWeekNumber(totalWeeks - 1);
        } else {
          setWeekNumber(totalWeeks);
        }
      } else {
        setWeekNumber(4);
      }
    } else {
      //if the user is not on the first week of the month then clicking previous button will navigate
      //to simply previous week for the same month
      setWeekNumber(weekNumber - 1);
    }
  };

  const handleNext = () => {
    if (weekNumber === weeks.length - 1) {
      setSelectedMonth(selectedMonth + 1);
      setWeekNumber(0);
    } else {
      setWeekNumber(weekNumber + 1);
    }
  };

  return (
    <div className="flex justify-between bg-yellow-400 px-4 rounded-t-lg items-center">
      <button
        onClick={() => handlePrev()}
        disabled={weekNumber === 0 && selectedMonth === currentMonth}
        className="border-0 outline-none cursor-pointer text-base rounded-full px-3 py-2"
      >
        <FaArrowLeft />
      </button>
      <p className="font-extrabold text-3xl">{Months[selectedMonth]}</p>
      <button
        onClick={() => handleNext()}
        disabled={selectedMonth === 11 && weekNumber === weeks.length - 1}
        className="border-0 outline-none cursor-pointer text-base rounded-full px-3 py-2"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Header;
