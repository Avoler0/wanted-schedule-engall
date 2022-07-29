export type AMPM = ""|"AM" | "PM";
export type Day = "Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday"|"Sunday";
export interface Query {
  keys(): any;
  startTime:{
    hour:string,
    minute:string,
    ampm:string
  },
  day:string
}
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
export type tableType = "ClassSchedule" | "AddSchedule";