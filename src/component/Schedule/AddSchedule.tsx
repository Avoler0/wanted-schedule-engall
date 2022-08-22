import { timesType } from "../../types/types";
import React, { useEffect } from "react";
import styled from "styled-components"
import { days, daysNum, minutes } from "../../const/const";
import useSchedule from "../../hook/useSchedule";
import { AMPM } from "../../types/types";


export default function AddChedule({setTableState}:any) {
  const [ampm,setAmPm] = React.useState<AMPM>("AM")
  const [minuteDrop , setMinuteDrop] = React.useState(false as boolean);
  const [hourValue,setHourValue] = React.useState<string>('');
  const [minuteValue,setMinuteValue] = React.useState("00");
  const [dayValue,setDayValue] = React.useState<Day | string>("Monday");
  const {postSchedule} = useSchedule();
  const times:timesType = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    hour:0,
    minute:Number(minuteValue),
    day:dayValue
  }
  const setHourTime = () => { 
    times.hour = ampm === "PM" ? Number(hourValue)+12 : Number(hourValue)
  }
  const setDropClick = (event:any) => {
    const minute = event.target.innerText;
    setMinuteValue(minute)
    setMinuteDrop(false)
  }
  const saveData = () => {
    setHourTime();
    

    postQuery(times)
  }
  
  const postQuery = (query:any) => {
    postSchedule(query)
    // setTableState("ClassSchedule")
  }
  const hourValidation = () => {
    if(ampm === "PM" && Number(hourValue) >= 11){
      if(Number(hourValue) === 12){
        alert("저녘 11시 이후로는 설정이 불가능 합니다.")
        setHourValue(11);
      }else if(minuteValue !== "00"){
        alert("저녘 11시 이후로는 설정이 불가능 합니다.")
        setMinuteValue("00");
      }
    } 
  }
  useEffect(()=>{
    hourValidation()
  },[hourValue,minuteValue,ampm])
  return (
    <>
      <Container>
        <StartTime>
          <Element>
            <SubTitle>
              <h2>Start time</h2>
            </SubTitle>
            <Time id="time">
              <TimeBox>
                <form >
                  <input  onChange={(event) => setHourValue(event.target.value)} value={hourValue} placeholder="00"/>
                </form>
              </TimeBox>
              <Colon>:</Colon>
              <DropBox>
                <TimeBox onClick={()=>setMinuteDrop(prev => !prev)} style={{cursor:"pointer"}}>{minuteValue}</TimeBox>
                {minuteDrop && <DropOption>{minutes.map((mi,index)=><li key={`${mi}+${index}`} onClick={(event) => setDropClick(event)} >{mi}</li>)}</DropOption>}
              </DropBox>
            </Time>
            <SelectTime>
              <TimeButton onClick={() => setAmPm("AM")} style={ ampm === "AM" ? { backgroundColor: "rgb(149,149,149)" , color:"#fff"} :null} >AM</TimeButton>
              <TimeButton onClick={() => setAmPm("PM")} style={ ampm === "PM" ? { backgroundColor: "rgb(149,149,149)" , color:"#fff"} :null} >PM</TimeButton>
            </SelectTime>
          </Element>
        </StartTime>
        <Table>
          <Element>
            <SubTitle>
              <h2>Repeat on</h2>
            </SubTitle>
            <Days>
                {days.map((day) => <Day onClick={(event) => setDayValue(event.target.innerText)} style={dayValue === day ? {border:"1px solid rgb(116,116,116,0.2)",color:"rgb(0,0,0,0.1)"}:null}>{day}</Day>)}
            </Days>
          </Element>
        </Table>
      </Container>
      <Button onClick={saveData}>Save</Button>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 3rem;
  background-color: rgb(255,255,255,1);
  box-shadow: 0 4px 4px -3px black;
  padding: 1.5rem;
  font-size: 16px;
  h2{
    margin: auto;
    font-size: 18px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  position: absolute;
  right: 2rem;
  width: 10rem;
  background-color: ${props => props.theme.buttonColor};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.6rem 0;
  margin: 2rem 0;
`;
const SubTitle = styled.div`
  display : flex;
  justify-content: center;
  align-items : center;
  width: 7rem;

`;
const StartTime = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 1.3rem;
`;

const Element = styled.div`
  position: relative;
  display: flex;
`;
const Time = styled.div`
  display:flex;
`;
const TimeBox = styled.div`
  display:inline-block;
  border: 1px solid rgb(116,116,116);
  box-shadow: 0 5px 5px 0 rgb(0,0,0,0.4);
  width:65px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  
  :before{
    content:'';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  form{
    display:inline-block;
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
  input{
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    text-align: center;
  }
`;
const DropBox = styled.div`
  display:inline-block;
  position: relative;
  width:65px  !important;
  height: 40px !important;
`;
const DropOption = styled.ul`
  position: absolute;
  border: 1px solid rgb(116,116,116);
  width: 100%;
  height: 4.5rem;
  background-color: #fff;
  overflow-y: scroll;
  -ms-overflow-style:none;
  scrollbar-width:none;
  ::-webkit-scrollbar {
    display: none;
  }
  li{
    width: 100%;
    height: 1.5rem;
    padding: 0.3rem 0 ;
    text-align: center;
    :hover{
      background-color: #d6cece;
      cursor: pointer;
    }
  }
`;
const Colon = styled.div`
  :before{
    content:'';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  margin: 0 10px;
`;
const SelectTime = styled.div`
  display: flex;
  margin-left: 1.5rem;
`;
const TimeButton = styled.div`
  border: 1px solid rgb(116,116,116);
  width:65px;
  height: 40px;
  margin-left: 10px;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
  :before{
  content:'';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
`;
const Table = styled.div`

`;
const Days = styled.div`
  display: flex;
`;
const Day = styled.div`
  border: 1px solid rgb(116,116,116);
  width:145px;
  height: 45px;
  margin-right: 1rem;
  text-align: center;
  cursor: pointer;
  :before{
    content:'';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;