export type AMPM = ""|"AM" | "PM";
export type Day = "Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday"|"Sunday";

export interface StartTime {
  hour: number,
  minute:number,
  ampm:string,
}
export interface SchedulType {
  week:string,
  day:string,
  startTime:string,
  endTime:string,
  id:number
}
interface timesType{
  year:number,
  month:number,
  hour:number,
  minute:number,
  day:string,
}
export type tableType = "ClassSchedule" | "AddSchedule";