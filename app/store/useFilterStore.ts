import { create } from "zustand";
import { ExpenseCategory, IncomeCategory } from "../types/transaction";

export type Filter = ExpenseCategory | IncomeCategory | "All Category";

interface FilterStore {
  filter: Filter;
  search: string;
  setFilter: (value: Filter) => void;
  setSearch: (value: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filter: "All Category",
  search: "",
  setFilter: (value) => set({ filter: value }),
  setSearch: (value) => set({ search: value }),
}));
