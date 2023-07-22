import { Day } from "./types";

function getDates(): Day[] {
  let dates: Day[] = [];

  const today: Date = new Date();
  const currentMonth: number = today.getMonth();
  const currentDay: number = today.getDate();
  const currentYear: number = today.getFullYear();

  let totalDays: number = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = currentDay; i <= totalDays; i++) {
    let date: Day = { day: i };
    dates.push(date);
  }

  return dates;
}

export const dates: Day[] = getDates();
