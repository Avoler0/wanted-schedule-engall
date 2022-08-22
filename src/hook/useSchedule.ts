import { timesType } from './../types/types.d';
import { addDays, addMinutes, format, setHours, setMinutes, startOfWeek } from "date-fns";
import React from "react";
import { Schedule } from "./axiosInstance";
import { daysNum } from '../const/const';


export default function useSchedule(){
  const [scheduleData , setScheduleData] = React.useState("");
  const [isLoading,setIsLoading] = React.useState(true);
  const [deleteState,setDeleteState] = React.useState(null);

  function getSchedule (selectWeek:string) {
    Schedule.get(`schedule?week_like=${selectWeek}`,(response:any) => {
      console.log(response);
      
      setScheduleData(response.data);
      setIsLoading(false)
    })
  }

  function postSchedule (query:timesType) {
    console.log("쿼리",query);
    
    const postData = dateOption(query)
    console.log("포스트",postData);
    
    Schedule.post("schedule", postData)
  }
  function dateOption(query) {
    const date = dateManager(query)
    return{
      week:getSelectWeek(),
      startTime:date,
      endTime:addMinutes(date,40),
      day:query.day
    }
    
  }
  function dateManager (times) {
    const {year,month,hour,minute,day} = times;
    const weekDay = startOfWeek(new Date(), { weekStartsOn: 1 })
    return new Date(year,month,weekDay.getDate()+daysNum[day],hour,minute);
  }
  function deleteSchedule (id:number) {
    Schedule.delete(`schedule/${id}`,(response:any) => {
      setDeleteState(response.status)
    })
  }

  function patchSchedule (query:Query) {
    const selectWeek = getSelectWeek()
    Schedule.patch(`schedule?id=${selectWeek}&?data&?${query?.day}`,query)
  }

  function getSelectWeek(){
    const today = startOfWeek(new Date(), { weekStartsOn: 1 })
    const weekFirst = format(today,"yyyy-MM-dd")
    const weekLast = format(addDays(today, 6),"yyyy-MM-dd")
    return weekFirst+"~"+weekLast;
  }

  return {scheduleData,getSchedule,postSchedule,deleteSchedule,patchSchedule,getSelectWeek,isLoading,deleteState}
}

