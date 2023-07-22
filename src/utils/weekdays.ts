function getWeekDayName(date: Date): String {
  return date.toLocaleString("en-US", { weekday: "short" });
}

function getNextWeekDays(): String[] {
  const today: Date = new Date();
  const nextSevenWeekDays: String[] = [];

  for (let i = 0; i < 7; i++) {
    const nextDate: Date = new Date(today);
    nextDate.setDate(today.getDate() + i);
    nextSevenWeekDays.push(getWeekDayName(nextDate));
  }

  return nextSevenWeekDays;
}

export const Weekdays: String[] = getNextWeekDays();
