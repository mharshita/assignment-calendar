import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

const today: Date = new Date();
const currentMonth: number = today.getMonth();

export interface SelectedMonthInterface {
  selectedMonth: number;
  setSelectedMonth: Dispatch<SetStateAction<number>>;
}

const defaultState = {
  selectedMonth: currentMonth,
  setSelectedMonth: (selectedMonth: number) => {},
} as SelectedMonthInterface;

export const MonthContext = createContext(defaultState);

type MonthProviderProps = {
  children: ReactNode;
};

export default function MonthProvider({ children }: MonthProviderProps) {
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);

  return (
    <MonthContext.Provider value={{ selectedMonth, setSelectedMonth }}>
      {children}
    </MonthContext.Provider>
  );
}
