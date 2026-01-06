export default function getMonthIndex(date: string): number {
  return Number(date.split(" - ")[1]) - 1;
}
