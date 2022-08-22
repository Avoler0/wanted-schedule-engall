import { format } from "date-fns";
import React from "react";
import styled from "styled-components"
import { days } from "../../const/const";
import useSchedule from "../../hook/useSchedule";
import XButton from "../../icons/x-svgrepo-com.svg"
import { SchedulType } from "../../types/types";
import ModalJSX from "../ModalJSX";

export default function ClassSchedule() {
  const {scheduleData,getSchedule,getSelectWeek,deleteSchedule,deleteState} = useSchedule();
  const [modalState,setModalState] = React.useState(false);
  const [modalDelete,setModalDelete] = React.useState<boolean | null>(null);
  const [deleteId,setDeleteId] = React.useState<number>(0)

  const clickDeleteSchedule = (id:number) => {
    setDeleteId(id)
    setModalState(true)
  }
  
  React.useEffect(()=>{
    const selectWeek = getSelectWeek()
    getSchedule(selectWeek)
    console.log(scheduleData);
  },[])

  React.useEffect(()=>{
    const selectWeek = getSelectWeek()
    getSchedule(selectWeek)
  },[deleteState])

  React.useEffect(()=>{
    if(modalDelete){
      deleteSchedule(deleteId);
      window.location.reload();
    }
  },[modalDelete])



  return (
    <Container>
      <Days id="days">
        {days.map((day)=> <Day>
          <span>{day}</span>
            <BoardWrap>
              {scheduleData && scheduleData.map((schedule:SchedulType)=>{
              const date = new Date(schedule.startTime)
              const startM = Number(format(new Date(schedule.startTime),"HH"))
              const endM = Number(format(new Date(schedule.startTime),"HH"))
              console.log(date,typeof startM);
              
            if(schedule.day === `${day}`){
              return (
                <Board key={`${schedule.id}`} >
                  <div>{format(new Date(schedule.startTime),"hh-mm")} {startM <= 11 ? "AM" : "PM"} - </div>
                  <div>{format(new Date(schedule.endTime),"hh-mm")} {endM <= 11 ? "AM" : "PM"}</div>
                  <img src={XButton} onClick={() => {clickDeleteSchedule(schedule.id)} } />
                </Board>
              )
            }
          })}
            </BoardWrap>
          </Day>)}

      </Days>
      <Schedule>
        <Board>

          
        </Board>
      </Schedule>
      {modalState && <ModalJSX setModalState={setModalState} setModalDelete={setModalDelete}/>}
    </Container>
  )
}
const Container = styled.div`
  height: 100%;
  padding: 0 1rem;
  
`

const Days = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 1rem;
  justify-content: center;
  text-align: center;

`;
const Day = styled.div`
  width: 25rem;
  height: 100%;
  color: black;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  span{
    border-bottom: 1px solid black;
  }
`;
const Schedule = styled.div`
  padding-top: 2rem;
`;
const BoardWrap = styled.div`
  
  margin-top: 1rem;
  padding-left: 1.5rem;
  width: 100%;
  height: 100%;
`;
const Board = styled.div`
  position: relative;
  background-color: ${props => props.theme.borderColor};
  width: 80%;
  height: 21%;
  margin-bottom: 0.3rem;
  border-radius: 0.6rem;
  div{
    text-align: left;
    padding: 0.1rem 0.4rem;
    margin-bottom: 0.2rem;
    font-size: 16px;
    color: ${props => props.theme.scheduleFontColor};
  }
  img{
    cursor: pointer;
    background-color: ${props => props.theme.xBackColor};
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    right: 0;
    border-radius: 15px;
    padding: 0.1rem;
    margin: 0.3rem 0.3rem 0 0;
    font-size: 12px;
    font-weight: 200;
    text-align: center;
  }
`;