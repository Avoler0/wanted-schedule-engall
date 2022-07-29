import { Query, StartTime } from '../types/types';
import { minutes } from './../const/const';
import { addDays, addMinutes, format, set, setHours, setMinutes, startOfWeek } from "date-fns";
import React from "react";
import { Schedule } from "./axiosInstance";


export default function useSchedule(){
  const [scheduleData , setScheduleData] = React.useState("");
  const [isLoading,setIsLoading] = React.useState(true);
  const [deleteState,setDeleteState] = React.useState(null);

  function getSchedule (selectWeek:string) {
    Schedule.get(`schedule?week_like=${selectWeek}`,(response:any) => {
      setScheduleData(response.data);
      setIsLoading(false)
    })
  }

  function postSchedule (query:Query) {
    console.log("쿼리",query);

    const postData = setPostData(query)
    Schedule.post("schedule", postData)
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

  function setPostData (query:Query) {
    const selectWeek = getSelectWeek()
    const withTime = getWithTime(query.startTime)
    const postDataResult = {
      week:selectWeek,
      day:query?.day,
      startTime:withTime?.start,
      endTime:withTime?.end,
    }
    return postDataResult
  }

  function getSelectWeek(){
    const today = startOfWeek(new Date(), { weekStartsOn: 1 })
    const weekFirst = format(today,"yyyy-MM-dd")
    const weekLast = format(addDays(today, 6),"yyyy-MM-dd")
    return weekFirst+"~"+weekLast;
  }

  function getWithTime(startTime:StartTime){
    const start = format(setHours(setMinutes( new Date(),startTime.minute),startTime.hour),"p");
    const end = format(addMinutes(setMinutes(setHours(new Date(), startTime?.hour),startTime?.minute), 40),"p")
    const withTime = {
      start:start,
      end:end
    }
    return withTime
  }
  return {scheduleData,getSchedule,postSchedule,deleteSchedule,patchSchedule,getSelectWeek,isLoading,deleteState}
}

